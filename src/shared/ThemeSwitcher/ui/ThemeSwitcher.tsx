import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import ThemeDarkIcon from "shared/assets/icons/theme-dark.svg";
import ThemeLightIcon from "shared/assets/icons/theme-light.svg";
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";
import {Button} from "shared/Button";
import {ButtonTheme} from "shared/Button/ui/Button";

interface ThemeSwitcherProps {
    className?: string,
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {

    const { theme, toggleTheme } = useTheme()

    return (
        <Button theme={ButtonTheme.CLEAR} className={classNames('', {}, [className])} onClick={toggleTheme}>
            {theme !== Theme.DARK ? <ThemeLightIcon/> : <ThemeDarkIcon/>}
        </Button>
    );
};