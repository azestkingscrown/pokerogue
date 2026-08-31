import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.pagefault.pokerogue",
  appName: "Pok\u00E9Rogue",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
  android: {
    backgroundColor: "#8c8c8c",
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    },
  },
};

export default config;
