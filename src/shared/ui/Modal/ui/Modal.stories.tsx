import type { Meta, StoryObj } from '@storybook/react';
import {Modal} from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        isOpen: true,
        children: 'Text',
        lazy: true
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Text',
        lazy: true
    },
};
