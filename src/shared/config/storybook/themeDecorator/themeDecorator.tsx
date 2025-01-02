import {StoryFn } from '@storybook/react';
import {Theme, ThemeProvider} from 'app/providers/ThemeProvider';

export const themeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div style={{minWidth: "70vw"}} className={`app ${theme}`}>
            <StoryComponent/>
        </div>
    </ThemeProvider>
);
