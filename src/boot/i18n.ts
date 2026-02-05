import { boot } from 'quasar/wrappers';

// Simple translation mock function
// Returns the key as fallback text
function translate(key: string): string {
  // Extract the last part of the key path (e.g., "messages.LabelTags" -> "LabelTags")
  const parts = key.split('.');
  const lastPart = parts[parts.length - 1];

  // Convert camelCase to readable text
  // LabelTags -> Label Tags
  return lastPart.replace(/([A-Z])/g, ' $1').trim();
}

export default boot(({ app }) => {
  // Make $t available globally in templates
  app.config.globalProperties.$t = translate;
});

// Export for use in setup functions
export function useI18n() {
  return {
    t: translate
  };
}
