import {classNames} from 'shared/lib/classNames/classNames'
import cls from './sidebar.module.scss'
import React from 'react'
import {ThemeSwitcher} from 'shared/ThemeSwitcher'
import {LangSwitcher} from 'shared/LangSwitcher'
import {Button, ButtonTheme} from "shared/Button/ui/Button";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = React.useState(false)

    const onToggleCollapsed = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div data-testid='sidebar' className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} data-testid='sidebar-toggle' onClick={onToggleCollapsed}>toggle</Button>
            <div className={classNames(cls.switchers, {[cls.switchersOff]: collapsed}, [])}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    )
}
