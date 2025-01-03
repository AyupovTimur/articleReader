import {classNames} from "shared/lib/classNames/classNames";
import cls from "./text.module.scss";

export enum TextTheme {
    NORMAL = "normal",
    ERROR = "error",
}

interface TextProps {
    className?: string;
    title?: string,
    text?: string,
    theme?: string
}

export const Text = (props: TextProps) => {

    const {
        className,
        title,
        text,
        theme = TextTheme.NORMAL,
    } = props

    return (
        <div className={classNames(cls.Text, {[cls[theme]]: true}, [className])}>
            {title && <p className={classNames(cls.title)}>{title}</p>}
            {text && <p className={classNames(cls.text)}>{text}</p>}
        </div>
    );
};
