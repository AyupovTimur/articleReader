import {StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const themeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <div style={{minWidth: "70vw"}} className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
