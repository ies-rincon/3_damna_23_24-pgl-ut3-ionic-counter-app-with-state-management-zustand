import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'counter.app.with.state.management.zustand',
  appName: 'counter-app-with-state-management-zustand',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
