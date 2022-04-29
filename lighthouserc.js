module.exports = {
    ci: {
      collect: {
        staticDistDir: './public',
        url: ['http://localhost:8080']
      },
      upload: {
        /* Agregue la configuración aquí */
        target: 'temporary-public-storage',
      },
    },
  };