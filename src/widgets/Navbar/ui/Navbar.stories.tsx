import type { Meta, StoryObj } from '@storybook/react';
import {Navbar} from "widgets/Navbar";

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Black: Story = {
    args: {},
};
