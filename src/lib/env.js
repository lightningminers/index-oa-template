
export const OPENAPIHOST = '';
export const HASCONSOLE = typeof console !== undefined;
export const ISBROWSER = typeof window !== 'undefined' && typeof window === 'object';
export const UA = ISBROWSER && window.navigator.userAgent.toLowerCase();