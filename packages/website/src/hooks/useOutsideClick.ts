import React from 'react';

export const useOutsideClick = (callback: (event: MouseEvent) => void) => {
  const ref = React.useRef();

  React.useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      callback(event);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return ref;
};
