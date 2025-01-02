import React, {ReactElement, ReactNode, useCallback, useEffect, useRef, useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './modal.module.scss';
import {Portal} from 'shared/ui/Portal/Portal';

interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpen?: boolean,
    onClose?: () => void,
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {

    const {className, children, isOpen, onClose} = props;
    const [isClose, setIsClose] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const mods:Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.close]: isClose
    }

    const closeHandler= useCallback(() => {
        if (onClose) {
            setIsClose(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClose(false);
            }, ANIMATION_DELAY)
        }
    }, [onClose]);

    const onKeyDown = useCallback((e:KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        }
    }, [isOpen, onKeyDown]);

    const onContentClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={classNames(cls.overlay)} onClick={closeHandler}>
                    <div className={classNames(cls.content)} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
