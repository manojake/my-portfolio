module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended', // Recommended base ESLint rules
    'plugin:react/recommended', // React recommended rules
    'plugin:react-hooks/recommended', // React Hooks recommended rules
    'plugin:jsx-a11y/recommended', // Accessibility (a11y) rules for JSX
    'airbnb', // Airbnb JavaScript style guide
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  rules: {
    // React-specific rules
    'react/prop-types': 'off', // Disable prop-types rule (if using TypeScript, it's unnecessary)
    'react/react-in-jsx-scope': 'off', // React 17+ no longer requires React import in JSX files

    // React hooks rules
    'react-hooks/rules-of-hooks': 'error', // Enforce rules of hooks
    'react-hooks/exhaustive-deps': 'warn', // Warn about missing dependencies in useEffect

    // JSX accessibility rules
    'jsx-a11y/anchor-is-valid': 'warn', // Ensure links are properly accessible

    // Airbnb rules customizations
    'import/no-unresolved': 'off', // Disable unresolved imports check (useful if working with monorepos)
    'import/prefer-default-export': 'off', // Disable preference for default exports
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }], // Allow JSX in both .js and .jsx files
    'react/jsx-uses-react': 'off', // React 17+ doesn’t need `React` in scope for JSX
    'react/jsx-uses-vars': 'warn', // Warn about unused variables in JSX
    'no-console': 'warn', // Warn about `console` usage (can be useful in production)

    // Optional: Enforce single quotes for JSX
    'jsx-a11y/no-onchange': 'off', // Disable warning for using `onchange` in favor of `onClick` or other event handlers

    // Optional: Customize or disable other rules based on your team's preferences
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
};
