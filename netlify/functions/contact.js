/**
 * Optional API handler for contact payloads (JSON).
 * Set RESEND_API_KEY and FORM_NOTIFICATION_EMAIL in Netlify env.
 * Primary intake remains Netlify Forms on static pages.
 */
exports.handler = async (event) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ ok: false, error: 'Method not allowed' }) };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.FORM_NOTIFICATION_EMAIL;

  if (!apiKey || !to) {
    return {
      statusCode: 503,
      headers,
      body: JSON.stringify({ ok: false, error: 'Email dispatch not configured' })
    };
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ ok: false, error: 'Invalid JSON' }) };
  }

  const { name, email, message } = body;
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return { statusCode: 400, headers, body: JSON.stringify({ ok: false, error: 'Name required' }) };
  }
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRe.test(email)) {
    return { statusCode: 400, headers, body: JSON.stringify({ ok: false, error: 'Valid email required' }) };
  }
  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    return { statusCode: 400, headers, body: JSON.stringify({ ok: false, error: 'Message too short' }) };
  }

  const subject = `Allied Axis contact: ${name.trim().slice(0, 80)}`;
  const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL || 'Allied Axis <onboarding@resend.dev>',
      to: [to],
      subject,
      text
    })
  });

  if (!res.ok) {
    const errText = await res.text();
    return {
      statusCode: 502,
      headers,
      body: JSON.stringify({ ok: false, error: 'Email failed', detail: errText.slice(0, 200) })
    };
  }

  return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
};
