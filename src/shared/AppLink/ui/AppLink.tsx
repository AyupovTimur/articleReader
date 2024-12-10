import { type FC } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './appLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    theme = AppLinkTheme.PRIMARY,
    className,
    children,
    ...otherProps
  } = props
  return (
    <Link
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      to={to}
      {...otherProps}>
      {children}
    </Link>
  )
}
