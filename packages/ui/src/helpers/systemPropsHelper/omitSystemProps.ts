import {
  systemProps,
  typographySystemProps
} from '../../constants/systemProps';

export const omitSystemProps = <TProps = Record<string, unknown>>(
  props: TProps,
  additionalPropNames?: string[]
): Record<string, unknown> => {
  const systemPropNames = Object.keys({
    ...systemProps,
    ...typographySystemProps
  });
  if (additionalPropNames) {
    systemPropNames.push(...additionalPropNames);
  }

  return typeof props === 'object'
    ? Object.keys(props).reduce<Record<string, unknown>>(
        (currentProps, propName) => {
          if (!systemPropNames.includes(propName)) {
            currentProps[propName] = props[propName as keyof typeof props];
          }
          return currentProps;
        },
        {} as Record<string, unknown>
      )
    : {};
};
