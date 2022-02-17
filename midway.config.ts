import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from '@midwayjs/hooks-kit';

export default defineConfig({
  // 后端根目录
  source: './src/server',
  // 后端文件系统路由并配置
  routes: [
      {
          baseDir: 'controller',
          basePath: '/api'
      }
  ],
  vite: {
    plugins: [react()],
    resolve: {
        alias: {
            '@enums': path.resolve(__dirname, 'src/server/enum.ts'),
        }
    },
  },
});
