import {classNames} from "shared/lib/classNames/classNames";
import cls from './loginForm.module.scss';
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button";
import {ButtonTheme} from "shared/ui/Button/ui/Button";
import {Input} from "shared/ui/Input";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const {t} = useTranslation("loginForm");
    const {className} = props;
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input placeholder={t("Логин")} type="text" autofocus></Input>
            <Input placeholder={t("Пароль")} type="text" autofocus></Input>
            <Button className={classNames(cls.loginBtn)} theme={ButtonTheme.OUTLINE}>{t("Войти")}</Button>
        </div>
    );
};
