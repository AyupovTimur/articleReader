import {classNames} from "shared/lib/classNames/classNames";
import cls from './input.module.scss';
import React, {ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState} from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {

    const ref = useRef<HTMLInputElement>(null);

    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    const [isFocused, setIsFocused] = useState(false);

    const onBlur = () => {
        setIsFocused(false);
    }

    const onFocus = () => {
        setIsFocused(true);
    }

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    return (
        <div className={classNames(cls.InputsGroup, {}, [className])}>
            <input
                ref={ref}
                className={classNames(cls.input)}
                type={type}
                value={value}
                onChange={onChangeHandler}
                placeholder={placeholder}
                onBlur={onBlur}
                onFocus={onFocus}
                {...otherProps}
            ></input>
        </div>
    );
});
