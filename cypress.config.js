import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: 'cypress/integration/Github/*.js', // <-- your JS files path
    setupNodeEvents(on, config) {
      // No special setup needed for now
      return config;
    },
  },
});
