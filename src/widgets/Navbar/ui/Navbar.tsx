import {classNames} from 'shared/lib/classNames/classNames'
import cls from './navbar.module.scss'
import {useCallback, useState} from "react";
import {Button} from "shared/ui/Button";
import {ButtonTheme} from "shared/ui/Button/ui/Button";
import {useTranslation} from "react-i18next";
import {LoginModal} from "features/AuthByUserName";
import {getUserAuthData, userActions} from "entities/User";
import {useDispatch, useSelector} from "react-redux";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {

    const {t} = useTranslation("navbar");
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData)

    const onCloseModal = useCallback(() => {
        setIsOpen(false)
    }, [isOpen])

    const onOpenModal = useCallback(() => {
        setIsOpen(true)
    }, [isOpen])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onLogout}>{t("Выйти")}</Button>
            </div>
        )
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onOpenModal}>{t("Войти")}</Button>
            {isOpen && <LoginModal isOpen={isOpen} onClose={onCloseModal}/>}
        </div>
    )
}
