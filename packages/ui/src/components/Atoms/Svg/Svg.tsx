import React from 'react';
import { Props, ReactSVG } from 'react-svg';

import {
  omitSystemProps,
  systemClassName
} from '../../../helpers/systemPropsHelper';
import { SpacingSystemProps } from '../../../types/SystemProps';

export interface SvgProps extends Props, SpacingSystemProps {
  size?: string;
  isUniColor?: boolean;
}

export const Svg: React.FC<SvgProps> = ({
  size,
  isUniColor,
  beforeInjection,
  src,
  ref,
  ...props
}) => (
  <ReactSVG
    {...omitSystemProps<SpacingSystemProps>(props)}
    src={src}
    className={systemClassName<SpacingSystemProps>(props)}
    beforeInjection={(svg) => {
      svg.setAttribute('width', '1em');
      svg.setAttribute('height', '1em');
      svg.setAttribute('fill', 'currentcolor');

      const style = `font-size: ${size};`;
      if (isUniColor) {
        const fills = svg.querySelectorAll('[fill]:not([fill="white"])');
        fills.forEach((fill) => {
          fill.removeAttribute('fill');
        });
      }
      svg.setAttribute('style', style);

      if (beforeInjection) {
        beforeInjection(svg);
      }
    }}
  />
);
