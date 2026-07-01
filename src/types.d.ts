/// <reference types="astro/client" />

// Fontsource packages ship CSS with no TypeScript declarations; declare them
// so side-effect imports (import '@fontsource-variable/fraunces') type-check.
declare module '@fontsource-variable/*';
declare module '@fontsource/*';
