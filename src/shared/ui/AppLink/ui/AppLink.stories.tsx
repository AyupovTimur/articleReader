import type { Meta, StoryObj } from '@storybook/react';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/ui/AppLink";

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        to: '/'
    }
} satisfies Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        children: 'TEXT',
        theme: AppLinkTheme.PRIMARY
    },
};

export const Black: Story = {
    args: {
        children: 'TEXT',
        theme: AppLinkTheme.SECONDARY
    },
};
