import { isBrowser } from './ssgHelper';

export const encodeBase64 = (content: string): string => {
  if (isBrowser) {
    return window.btoa(unescape(encodeURIComponent(content)));
  }
  const buffer = Buffer.from(content, 'utf-8');
  return buffer.toString('base64');
};

export const decodeBase64 = (base64Content: string): string => {
  if (isBrowser) {
    return decodeURIComponent(escape(window?.atob(base64Content)));
  }
  const buffer = new Buffer(base64Content, 'base64');
  return buffer.toString('utf-8');
};
