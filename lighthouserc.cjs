module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npx --yes serve -s dist -l 4173',
      startServerReadyPattern: 'Accepting connections',
      startServerReadyTimeout: 120000,
      url: [
        'http://127.0.0.1:4173/',
        'http://127.0.0.1:4173/contact',
        'http://127.0.0.1:4173/services'
      ]
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }]
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
};
