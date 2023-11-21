import type { Meta, StoryObj } from '@storybook/react';
import { HomeTemplate } from './home.template';

export default {
  title: 'Templates/Home/HomeTemplate',
  component: HomeTemplate
} as Meta<typeof HomeTemplate>;

type Story = StoryObj<typeof HomeTemplate>;

export const Home: Story = {
  render: () => <HomeTemplate />
};
