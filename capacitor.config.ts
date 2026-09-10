import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tannn.royalegamehub',
  appName: 'Royale GameHub',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https'
  }
};

export default config;
