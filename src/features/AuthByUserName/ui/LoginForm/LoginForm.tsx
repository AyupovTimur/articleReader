import {classNames} from "shared/lib/classNames/classNames";
import cls from './loginForm.module.scss';
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button";
import {ButtonTheme} from "shared/ui/Button/ui/Button";
import {Input} from "shared/ui/Input";
import {useDispatch, useSelector} from "react-redux";
import {memo, useCallback} from "react";
import {loginActions} from "features/AuthByUserName/model/slice/loginSlice";
import {getLoginState} from "features/AuthByUserName/model/selectors/getLoginState/getLoginState";
import {loginByUserName} from "features/AuthByUserName/model/services/loginByUserName/loginByUserName";
import {Text} from "shared/ui/Text";
import {TextTheme} from "shared/ui/Text/ui/Text";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({className}: LoginFormProps) => {
    const {t} = useTranslation("loginForm");
    const dispatch = useDispatch();
    const {username, password, isLoading, error} = useSelector(getLoginState)

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch])
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch])
    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({username, password}))
    }, [dispatch, username, password])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t("Форма авторизации")}></Text>
            {error && <Text text={t("Неверно введен логин или пароль")} theme={TextTheme.ERROR}/>}
            <Input
                placeholder={t("Логин")}
                type="text"
                autofocus
                onChange={onChangeUserName}
                value={username}
            ></Input>
            <Input
                placeholder={t("Пароль")}
                type="text"
                autofocus
                onChange={onChangePassword}
                value={password}
            ></Input>
            <Button
                className={classNames(cls.loginBtn)}
                theme={ButtonTheme.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
                >
                {t("Войти")}
            </Button>
        </div>
    );
});
