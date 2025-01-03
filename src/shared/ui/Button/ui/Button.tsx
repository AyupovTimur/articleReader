import {classNames} from 'shared/lib/classNames/classNames'
import {type ButtonHTMLAttributes, type FC} from 'react'
import cls from './button.module.scss'

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme,
    disabled?: boolean,
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        children,
        disabled,
        ...otherProps
    } = props

    const mods: Record<string, boolean> = {
        [cls.disabled]: disabled
    }

    return (
        <button
            className={classNames(cls.Button, mods, [className, cls[theme]])}
            disabled={disabled}
            {...otherProps}>
            {children}
        </button>
    )
}
