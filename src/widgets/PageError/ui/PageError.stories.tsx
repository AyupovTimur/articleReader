import type { Meta, StoryObj } from '@storybook/react';
import {PageError} from "widgets/PageError";

const meta = {
    title: 'widgets/PageError',
    component: PageError,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PageError>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Black: Story = {
    args: {},
};
