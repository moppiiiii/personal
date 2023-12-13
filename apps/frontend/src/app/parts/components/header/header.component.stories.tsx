import type { Meta, StoryObj } from '@storybook/react';
import { HeaderComponent } from './header.component';

export default {
  title: 'Components/Header/Header',
  component: HeaderComponent,
  args: {
    children: 'Header'
  }
} as Meta<typeof HeaderComponent>;

type Story = StoryObj<typeof HeaderComponent>;

export const HeadingPrimary: Story = {
  render: () => <HeaderComponent />
};
