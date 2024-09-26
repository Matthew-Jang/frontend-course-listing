import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

import dns from 'dns'
dns.setDefaultResultOrder('verbatim')
import path from 'path' // Add this line to import "path"

export default () => {
  const baseURL = process.env.APP_ENV === 'development' ? '/' : '/2024/project2/t4'

  return defineConfig({
    plugins: [vue(), vuetify({ autoImport: true })],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src') // Define "@" to point to the "src" folder
      }
    },

    server: {
      host: 'localhost',
      port: 8081
    },

    base: baseURL
  })
}
