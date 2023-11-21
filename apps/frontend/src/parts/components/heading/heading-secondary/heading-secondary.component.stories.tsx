import type { Meta, StoryObj } from '@storybook/react';
import { HeadingSecondaryComponent } from './heading-secondary.component';

export default {
  title: 'Components/Heading/HeadingSecondary',
  component: HeadingSecondaryComponent,
  args: {
    children: 'HeadingSecondary'
  }
} as Meta<typeof HeadingSecondaryComponent>;

type Story = StoryObj<typeof HeadingSecondaryComponent>;

export const HeadingSecondary: Story = {
  render: () => <HeadingSecondaryComponent>HeadingSecondary</HeadingSecondaryComponent>
};
