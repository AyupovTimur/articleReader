import {Preview} from "@storybook/react";
import '../../src/app/styles/index.scss'
import {themeDecorator} from "../../src/shared/config/storybook/themeDecorator/themeDecorator";
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";
import {styleDecorator} from "../../src/shared/config/storybook/styleDecorator/styleDecorator";
import {routerDecorator} from "../../src/shared/config/storybook/routerDecorator/routerDecorator";

const preview: Preview = {
    parameters: {
        layout: 'centered',
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    }
}
export default preview;

export const decorators = [
    routerDecorator,
    styleDecorator,
    themeDecorator(Theme.LIGHT)
]



