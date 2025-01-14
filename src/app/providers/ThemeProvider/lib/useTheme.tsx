import {useContext} from 'react'
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from 'app/providers/ThemeProvider/lib/ThemeContext'

interface useThemeResult {
    theme: Theme
    toggleTheme: () => void
}

export function useTheme(): useThemeResult {
    const {theme, setTheme} = useContext(ThemeContext)
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    const toggleTheme = () => {
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
    return {theme, toggleTheme}
};

export default useTheme
