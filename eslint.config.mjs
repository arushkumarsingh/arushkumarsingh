import nextConfig from "eslint-config-next";

export default [
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "bin/**",
      "test/**",
      "*.js",
      "*.mjs",
      "al-folio-*/**",
    ],
  },
  ...nextConfig,
];
