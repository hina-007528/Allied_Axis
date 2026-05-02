import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

// Resolve project root from this file so `vite` works even if the shell cwd is wrong
const projectRoot = fileURLToPath(new URL('.', import.meta.url));

/** GitHub Pages project site: https://<user>.github.io/<repo>/ — set in CI via GITHUB_PAGES=true */
const base =
  process.env.GITHUB_PAGES === 'true' ? '/Allied_Axis/' : '/';

/** Dev/preview: Netlify Forms only exist on the deployed site — forward POSTs there so submissions actually arrive while using `npm run dev` / `vite preview`. */
function netlifyFormForwardPlugin() {
  const forwardOrigin = (
    process.env.NETLIFY_FORM_FORWARD_URL ||
    process.env.VITE_NETLIFY_FORM_FORWARD_URL ||
    'https://allied-axis.netlify.app'
  ).replace(/\/$/, '');

  function readBody(req) {
    return new Promise((resolve, reject) => {
      const chunks = [];
      req.on('data', (c) => chunks.push(c));
      req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
      req.on('error', reject);
    });
  }

  function attach(server) {
    server.middlewares.use(async (req, res, next) => {
      const pathname = (req.url || '').split('?')[0];
      if (req.method !== 'POST' || pathname !== '/__netlify_form_forward') {
        return next();
      }
      const body = await readBody(req);
      try {
        const r = await fetch(`${forwardOrigin}/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            Accept: '*/*'
          },
          body
        });
        res.statusCode = r.status;
        const buf = Buffer.from(await r.arrayBuffer());
        res.setHeader('Content-Length', String(buf.length));
        res.end(buf);
      } catch (e) {
        console.error('[netlify-form-forward] Could not reach Netlify:', e?.message || e);
        res.statusCode = 502;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Netlify form forward failed — check NETLIFY_FORM_FORWARD_URL and your network.');
      }
    });
  }

  return {
    name: 'netlify-form-forward',
    configureServer: attach,
    configurePreviewServer: attach
  };
}

export default defineConfig({
  base,
  root: projectRoot,
  plugins: [vue(), netlifyFormForwardPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three')) return 'three';
        }
      }
    },
    chunkSizeWarningLimit: 900
  }
});
