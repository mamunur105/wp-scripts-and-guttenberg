import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                'add-to-cart': path.resolve(__dirname, 'blocks/add-to-cart/index.jsx'),
            },
            output: {
                entryFileNames: '[name].js',
                dir: 'dist',
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    '@wordpress/blocks': 'wp.blocks',
                    '@wordpress/element': 'wp.element',
                    '@wordpress/i18n': 'wp.i18n',
                    '@wordpress/components': 'wp.components',
                    '@wordpress/block-editor': 'wp.blockEditor',
                },
            },
            external: [
                'react',
                'react-dom',
                '@wordpress/blocks',
                '@wordpress/element',
                '@wordpress/i18n',
                '@wordpress/components',
                '@wordpress/block-editor',
            ],
        },
    },
    css: {
        preprocessorOptions: {
            scss: {},
        },
    },
});