import {fileURLToPath, URL} from 'url';

import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

const target = 'https://localhost:8000';

export default defineConfig({
    plugins: [vue(), vueJsx()],
    resolve: {
        alias: {
            'app': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        proxy: {
            '/upload-excel': {
                secure: false,
                target: target,
            },
            '/parser/status': {
                secure: false,
                target: target,
            },
        }
    }
})
