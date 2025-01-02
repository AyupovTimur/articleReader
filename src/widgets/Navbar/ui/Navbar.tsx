import {classNames} from 'shared/lib/classNames/classNames'
import cls from './navbar.module.scss'
import {Modal} from "shared/ui/Modal";
import {useCallback, useState} from "react";
import {Button} from "shared/ui/Button";
import {ButtonTheme} from "shared/ui/Button/ui/Button";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {

    const {t} = useTranslation("navbar");
    const [isOpen, setIsOpen] = useState(false)

    const onToggleModal = useCallback(() => {
        setIsOpen((prevState) => !prevState)
    }, [isOpen])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onToggleModal}>{t("Войти")}</Button>
            <Modal isOpen={isOpen} onClose={onToggleModal} children={"Здесь будут поля"}/>
        </div>
    )
}
