import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { spacingSystemPropsControls } from '../../../constants';
import { Link } from './Link';

export default {
  title: 'Components/Atoms/Link',
  component: Link,
  argTypes: {
    ...spacingSystemPropsControls
  },
  args: {
    children: 'Link Label'
  }
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Overview = Template.bind({});
Overview.args = {};
