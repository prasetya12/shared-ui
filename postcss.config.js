export default {
    plugins: {
      "@tailwindcss/postcss": {},
      'postcss-prefix-selector': {
            prefix: '.ui-lib', // The class that will scope your styles
            // Optional: transform to handle special cases like 'body' or ':root'
            transform: (prefix, selector, prefixedSelector) => {
                if (selector === 'body' || selector === ':root') {
                return prefix; // Applies styles directly to your root .my-lib element
                }
                return prefixedSelector;
            },
        },
    }
  }