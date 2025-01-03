import {classNames} from 'shared/lib/classNames/classNames'
import cls from './navbar.module.scss'
import {useCallback, useState} from "react";
import {Button} from "shared/ui/Button";
import {ButtonTheme} from "shared/ui/Button/ui/Button";
import {useTranslation} from "react-i18next";
import {LoginModal} from "features/AuthByUserName";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {

    const {t} = useTranslation("navbar");
    const [isOpen, setIsOpen] = useState(false)

    const onCloseModal = useCallback(() => {
        setIsOpen(false)
    }, [isOpen])

    const onOpenModal = useCallback(() => {
        setIsOpen(true)
    }, [isOpen])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onOpenModal}>{t("Войти")}</Button>
            <LoginModal isOpen={isOpen} onClose={onCloseModal}/>
        </div>
    )
}
