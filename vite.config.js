import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// 各个服务的启动端口
const portData = {
    client: 9527,
    server: 3000
};

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: portData.client,
        origin: `https://localhost:${portData.client}`,
        proxy: {
            '/api': `http://localhost:${portData.server}/`
        },
        hmr: {
            overlay: false
        }
    },
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()]
        }),
        Components({
            resolvers: [ElementPlusResolver()]
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
});
