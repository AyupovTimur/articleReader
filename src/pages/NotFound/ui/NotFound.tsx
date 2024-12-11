import {classNames} from "shared/lib/classNames/classNames";
import cls from './notFound.module.scss';
import {useTranslation} from "react-i18next";

interface NotFoundProps {
    className?: string
}

const NotFound = ({className}: NotFoundProps) => {

    const {t} = useTranslation('notFound')

    return (
        <div className={classNames(cls.NotFound, {}, [className])}>
            <h1>{t("Страница не найдена")}</h1>
        </div>
    )
}

export default NotFound;
