import {classNames} from "shared/lib/classNames/classNames";
import cls from './pageError.module.scss';
import {useTranslation} from "react-i18next";

interface PageErrorProps {
    className?: string;
}

export const PageError = ({className}: PageErrorProps) => {

    const {t} = useTranslation('pageError');

    const updatePage = () => {
        location.reload()
    }

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h1>{t("Произошла ошибка, пожалуйста обновите страницу")}</h1>
            <button onClick={updatePage}>{t("Обновить страницу")}</button>
        </div>
    )
}
