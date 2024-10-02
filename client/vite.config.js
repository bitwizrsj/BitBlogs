import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API calls to the backend server
      '/api': {
        target: 'http://localhost:3008', // Replace with your backend server address
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
