export default {
  base: '/portfolio-website/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        something: resolve(__dirname, 'projects.html')
      }
    }
  }
}
