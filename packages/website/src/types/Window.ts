import { StaticCache } from './StaticCache';

declare global {
  interface Window {
    staticCache: StaticCache;
  }
}
