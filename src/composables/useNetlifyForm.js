/**
 * Netlify Forms submission + shared client-side validation.
 * AJAX body matches Netlify docs: URLSearchParams from FormData + form-name.
 *
 * Local dev: Vite proxies POSTs via `/__netlify_form_forward` → production Netlify (see vite.config.js)
 * so submissions still appear in the Netlify Forms inbox. Override origin with NETLIFY_FORM_FORWARD_URL.
 */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** Optional phone: allow digits, spaces, +, parentheses, hyphen; min 8 digits worth */
const PHONE_RE = /^[\d\s+().\-]{8,}$/;

export function clearFieldError(inputEl) {
  if (!inputEl?.classList) return;
  inputEl.classList.remove('field-error');
  const group = inputEl.closest('.form-group');
  if (group) {
    group.querySelector(':scope > .error-msg')?.remove();
    return;
  }
  const next = inputEl.nextElementSibling;
  if (next?.classList?.contains('error-msg')) next.remove();
}

/** Call from @input / @change on forms to clear state when the user corrects a field. */
export function clearFieldErrorOnInput(ev) {
  const t = ev.target;
  if (!t?.matches?.('input:not([type="hidden"]), select, textarea')) return;
  if (t.name === 'bot-field') return;
  clearFieldError(t);
}

export function clearFormFieldErrors(formEl) {
  if (!formEl) return;
  formEl.querySelectorAll('.field-error').forEach((el) => el.classList.remove('field-error'));
  formEl.querySelectorAll('.error-msg').forEach((el) => el.remove());
}

function appendFieldError(inputEl, message) {
  inputEl.classList.add('field-error');
  const group = inputEl.closest('.form-group');
  if (group) {
    let span = group.querySelector(':scope > .error-msg');
    if (!span) {
      span = document.createElement('span');
      span.className = 'error-msg';
      group.appendChild(span);
    }
    span.textContent = message;
    return;
  }
  let span = inputEl.nextElementSibling;
  if (!span?.classList?.contains('error-msg')) {
    span = document.createElement('span');
    span.className = 'error-msg';
    inputEl.insertAdjacentElement('afterend', span);
  }
  span.textContent = message;
}

export function validateField(el, label) {
  const tag = el.tagName?.toLowerCase();
  const val = (el.value || '').trim();
  if (el.name === 'bot-field' || el.closest?.('.hp')) return '';

  if (el.required && !val) {
    return `${label || 'This field'} is required.`;
  }
  if (tag === 'input' && el.type === 'email' && val && !EMAIL_RE.test(val)) {
    return 'Enter a valid email address.';
  }
  if (tag === 'input' && (el.type === 'tel' || el.name === 'phone') && val) {
    const digits = val.replace(/\D/g, '');
    if (digits.length < 8 || !PHONE_RE.test(val)) {
      return 'Enter a valid phone number (at least 8 digits).';
    }
  }
  if (tag === 'textarea' && el.required && val.length < 10) {
    return 'Please enter at least 10 characters.';
  }
  if (tag === 'input' && el.type === 'text' && el.name === 'name' && val && val.length < 2) {
    return `${label || 'Name'} must be at least 2 characters.`;
  }
  if (tag === 'input' && el.name === 'business' && val && val.length < 2) {
    return `${label || 'Business name'} must be at least 2 characters if provided.`;
  }
  return '';
}

export function validateFormFields(formEl) {
  const list = [];
  const fields = formEl.querySelectorAll('input:not([type="hidden"]), select, textarea');
  for (const el of fields) {
    if (el.name === 'bot-field' || el.closest?.('.hp')) continue;
    const lab = formEl.querySelector(`label[for="${el.id}"]`);
    const labelText = lab?.textContent?.replace(/\*/g, '').trim();
    const err = validateField(el, labelText);
    if (err) list.push({ el, message: err });
  }
  return list;
}

/**
 * @param {HTMLFormElement} formEl
 * @param {string} [actionPath='/'] Must match the form’s `action` (site root is standard for this SPA).
 * @returns {Promise<{ ok: boolean, error?: string, field?: Element, errors?: Array, _devOnly?: boolean }>}
 */
export async function submitNetlifyForm(formEl, actionPath = '/') {
  const honeypot = formEl.querySelector('[name="bot-field"]');
  if (honeypot?.value) {
    return {
      ok: false,
      error:
        'A spam-protection field was filled in (sometimes caused by a password manager). Clear the form, try again, or email info@alliedaxis.digital.'
    };
  }

  clearFormFieldErrors(formEl);
  const errors = validateFormFields(formEl);
  if (errors.length) {
    errors.forEach(({ el, message }) => appendFieldError(el, message));
    const first = errors[0].el;
    first?.focus?.();
    return { ok: false, error: errors[0].message, field: first, errors };
  }

  const formName = formEl.getAttribute('name');
  if (!formName?.trim()) {
    return { ok: false, error: 'Form is misconfigured (missing name). Please email info@alliedaxis.digital.' };
  }

  const fd = new FormData(formEl);
  const params = new URLSearchParams(fd);
  if (!params.get('form-name')) {
    params.set('form-name', formName);
  }

  const path = actionPath.startsWith('/') ? actionPath : `/${actionPath}`;
  const defaultUrl =
    typeof window !== 'undefined' ? new URL(path, window.location.origin).href : actionPath;

  /** In Vite dev / preview, real Netlify handler is not on this origin — use dev proxy to real site */
  const useDevForward =
    import.meta.env.DEV &&
    typeof window !== 'undefined' &&
    (window.location.port === '5173' || window.location.port === '4173');
  const url = useDevForward
    ? new URL('/__netlify_form_forward', window.location.origin).href
    : defaultUrl;

  let res;
  try {
    res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        Accept: 'application/json, text/plain, */*'
      },
      body: params.toString(),
      credentials: 'same-origin'
    });
  } catch {
    return {
      ok: false,
      error: 'Network error. Check your connection and try again, or email info@alliedaxis.digital.'
    };
  }

  const status = res.status;
  const okHttp = status >= 200 && status < 300;

  if (okHttp) {
    return { ok: true };
  }

  let detail = `Something went wrong (server responded ${status}). Please email info@alliedaxis.digital.`;
  if (status === 404) {
    detail =
      'Form endpoint returned 404. If you are on localhost (Vite), deploy to Netlify or run `netlify dev` — the dev server cannot receive submissions. On the live site, trigger a redeploy and confirm Forms are enabled in the Netlify UI.';
  }

  return { ok: false, error: detail };
}
