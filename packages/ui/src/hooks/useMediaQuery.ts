import { useLayoutEffect, useState } from 'react';

import { matchMediaQueryList } from '../constants';
import { MatchBreakpointsType } from '../types';

export const useMediaQuery = (query: MatchBreakpointsType) => {
  const [matches, setMatches] = useState(false);

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
