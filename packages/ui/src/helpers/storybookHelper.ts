import { ArgTypes, InputType } from '@storybook/csf';
import { SBScalarType } from '@storybook/csf/dist/SBType';

import { kebabCase } from './stringHelper';

const MDN_URL = 'https://developer.mozilla.org/en-US/docs/Web/CSS/';

export const createDescription = (options: {
  cssProperties: string[];
  cssValues?: string[];
}): string => {
  const description: string[] = [];
  const cssProps = options.cssProperties
    .map(kebabCase)
    .map((cssProp) => ` [${cssProp}](${MDN_URL}${cssProp})`)
    .join(', ');

  let cssPropertiesDescription = `**CSS Properties**: ${cssProps}`;
  if (options.cssValues) {
    cssPropertiesDescription += ` \`(${options.cssValues.join(' | ')})\``;
  }

  description.push(cssPropertiesDescription);

  return description.join('<br />');
};

export const createControls = (options: {
  category: string;
  props: { [propName: string]: string[] };
  type?: Record<string, SBScalarType['name']> | SBScalarType['name'];
  options?: Record<string, readonly string[]> | readonly string[];
}): Partial<ArgTypes<unknown>> => {
  return Object.entries(options.props).reduce<Record<string, InputType>>(
    (controls, [propName, cssProperties]) => {
      controls[propName] = {
        description: createDescription({
          cssProperties
        }),
        table: {
          category: options.category
        }
      };

      if (options.options) {
        controls[propName].options = (
          (options.options as Record<string, readonly string[]>)?.[propName]
            ? (options.options as Record<string, readonly string[]>)?.[propName]
            : options.options
        ) as readonly string[];
      }

      if (options.type) {
        controls[propName].type = (
          options.type as Record<string, SBScalarType['name']>
        )?.[propName]
          ? (options.type as Record<string, SBScalarType['name']>)?.[propName]
          : (options.type as SBScalarType['name']);
      }

      return controls;
    },
    {}
  );
};
