import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    base: '/',
    themeConfig: {
        siteTitle: 'WRT Papercut Guide',
        logo: '/logo.png' // path is relative to docs/public folder
    }
})