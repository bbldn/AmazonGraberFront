import {fileURLToPath, URL} from 'url';

import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

const target = 'https://localhost:8000';

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            'app': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        proxy: {
            '/parser/start': {
                secure: false,
                target: target,
            },
            '/parser/status': {
                secure: false,
                target: target,
            },
            '/products/search': {
                secure: false,
                target: target,
            },
            '/parser/upload-excel': {
                secure: false,
                target: target,
            },
        }
    }
})
