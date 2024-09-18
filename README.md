This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


eslintrc.json;
{
  "extends": [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  "plugins": [
    "react",
    "react-hooks",
    "jsx-a11y"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "off",
    "react-hooks/exhaustive-deps": "off",
    "no-trailing-spaces": "error",
    "no-self-compare": "error",
    "no-eq-null": "error",
    "func-style": ["error", "expression"],
    "consistent-return": "error",
    "array-callback-return": "error",
    "no-var": "error",
    "prefer-const": "error",
    "dot-notation": "warn",
    "func-name-matching": "warn",
    "guard-for-in": "warn",
    "jsx-quotes": ["error", "prefer-double"],
    "key-spacing": ["error", { "beforeColon": false }],
    "keyword-spacing": ["error", { "before": true }],
    "max-lines-per-function": ["warn", 250],
    "max-nested-callbacks": ["error", 2],
    "max-params": ["error", 3],
    "max-len": ["error", { "code": 120 }],
    "max-depth": ["error", 2],
    "max-statements": ["error", 20],
    "complexity": ["error", 15],
    "semi": "error",
    "react/react-in-jsx-scope": "off",
    "no-undef": "off",
    "import/order": "error",
    "quotes": ["error", "single"],
    "eqeqeq": "error",
    "space-before-blocks": "error",
    "no-empty-function": "error"
  }
}

prettierrc.json;
{
  "trailingComma": "es5",
  "semi": true,
  "tabWidth": 2,
  "singleQuote": true,
  "jsxSingleQuote": false,
  "importOrder": ["^components/(.*)$", "^[./]" ],
  "importOrderSeparation": true, 
  "importOrderSortSpecifiers": true 
}