import {classNames} from "shared/lib/classNames/classNames";
import cls from './navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/AppLink/ui/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>О проекте</AppLink>
            </div>
        </div>
    );
};