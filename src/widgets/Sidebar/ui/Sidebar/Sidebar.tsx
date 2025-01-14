import {classNames} from 'shared/lib/classNames/classNames'
import cls from './sidebar.module.scss'
import React from 'react'
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher'
import {LangSwitcher} from 'shared/ui/LangSwitcher'
import {Button, ButtonTheme} from "shared/ui/Button/ui/Button";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/ui/AppLink";
import HomePageIcon from 'shared/assets/icons/home_page.svg';
import AboutAsIcon from 'shared/assets/icons/aboutAs_page.svg';
import HomePageIconLight from 'shared/assets/icons/home_page_light.svg';
import AboutAsIconLight from 'shared/assets/icons/about_page_light.svg';
import {useTranslation} from "react-i18next";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = React.useState(false)
    const {t} = useTranslation("sidebar");
    const onToggleCollapsed = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div data-testid='sidebar' className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <div className={classNames(cls.sidebarButton)}>
                <Button
                    theme={ButtonTheme.OUTLINE}
                    data-testid='sidebar-toggle'
                    onClick={onToggleCollapsed}>
                    {collapsed ? '>' : '<'}
                </Button>
            </div>
            <div className={classNames(cls.links)}>
                <AppLink className={classNames(cls.link)} theme={AppLinkTheme.SECONDARY} to={'/'}>
                    <div className={classNames(cls.icon)}>
                        <HomePageIcon />
                    </div>
                    <div className={classNames(cls.linkName)}>
                        {t("Главная")}
                    </div>
                </AppLink>
                <AppLink className={classNames(cls.link)} theme={AppLinkTheme.SECONDARY} to={'/about'}>
                    <div className={classNames(cls.icon)}>
                        <AboutAsIcon />
                    </div>
                    <div className={classNames(cls.linkName)}>
                        {t("О проекте")}
                    </div>
                </AppLink>
            </div>
            <div className={classNames(cls.switchers)}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    )
}
