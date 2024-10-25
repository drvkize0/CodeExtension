import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

export default defineConfig({
    plugins: [],
    build: {
        lib: {
            entry: "./src/extension.ts",
            formats: ['es'],
            fileName: () => 'extension.js',
        },
        rollupOptions: {
            external: ['vscode'],

            output: {
                globals: {
                    vscode: 'vscode'
                }
            }
        },
        outDir: path.resolve(__dirname, './dist'),
    }
})