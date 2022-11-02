import React from 'react';

import { matchMediaQueryList } from '../constants';
import { MatchBreakpointsType } from '../types';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const useLayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : () => {};

export const useMediaQuery = (query: MatchBreakpointsType) => {
  const [matches, setMatches] = React.useState<boolean>(false);

  useLayoutEffect(() => {
    const media = window.matchMedia(matchMediaQueryList[query]);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [query]);

  return matches;
};
