import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Địa chỉ IP. Sử dụng '0.0.0.0' để nghe trên tất cả các địa chỉ IP.
    port: 4000, // Thay đổi cổng tại đây
  },
})
