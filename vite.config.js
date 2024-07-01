import { defineConfig } from "vite";
//import vue from '@vitejs/plugin-vue'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                home: 'index.html',
                test: 'testpage.html'
            }
        }
    }
    
    //base: '/',
    //plugins: [vue()]
})