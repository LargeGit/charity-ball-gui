import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react-router-dom', '@chakra-ui/react']
    },
    server: {
        proxy: {
            '/api/banner/': {
                target: 'http://localhost:5010/',
                secure: false,
                changeOrigin: true
            },
            '/api/user/': {
                target: 'http://localhost:5002/',
                secure: false,
                changeOrigin: true
            },
            '/api/team/': {
                target: 'http://localhost:5001/',
                secure: false,
                changeOrigin: true
            },
            '/api/shirt/': {
                target: 'http://localhost:5035/',
                secure: false,
                changeOrigin: true
            },
            '/api/referee/': {
                target: 'http://localhost:5040/',
                secure: false,
                changeOrigin: true
            },
            '/api/squad/': {
                target: 'http://localhost:5003/',
                secure: false,
                changeOrigin: true
            },
            '/api/email/': {
                target: 'http://localhost:5025/',
                secure: false,
                changeOrigin: true
            },
            '/api/report/': {
                target: 'http://localhost:5020/',
                secure: false,
                changeOrigin: true
            },
            '/api/info/': {
                target: 'http://localhost:5015/',
                secure: false,
                changeOrigin: true
            },
            '/api/competition/': {
                target: 'http://localhost:5000/',
                secure: false,
                changeOrigin: true
            }
        }
    }
})
