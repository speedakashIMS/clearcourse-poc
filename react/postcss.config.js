import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

// PostCSS plugin to remove .table utility class
function removeTableClass() {
  return {
    postcssPlugin: 'remove-table-class',
    Rule(rule) {
      if (rule.selector) {
        // Match exactly .table (not .table-slider or other table-related classes)
        const isTableUtility = /^\.table(\s|,|$|:)/.test(rule.selector);
        if (isTableUtility) {
          rule.remove();
        }
      }
    },
  };
}

removeTableClass.postcss = true;

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
    removeTableClass,
  ],
}

