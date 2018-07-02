// copy this to app module src directories for TypeScript projects or distribute it as internal npm module

declare module 'loader' {
  export function Run(): void;
  export function getUserId(state: any): string;
}
