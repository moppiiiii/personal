import type { Meta, StoryObj } from '@storybook/react';
import { HeadingPrimaryComponent } from './heading-primary.component';

export default {
  title: 'Components/Heading/HeadingPrimary',
  component: HeadingPrimaryComponent,
  args: {
    children: 'HeadingPrimary'
  }
} as Meta<typeof HeadingPrimaryComponent>;

type Story = StoryObj<typeof HeadingPrimaryComponent>;

export const HeadingPrimary: Story = {
  render: () => <HeadingPrimaryComponent>HeadingPrimary</HeadingPrimaryComponent>
};
