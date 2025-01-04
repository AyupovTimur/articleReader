import {classNames} from "shared/lib/classNames/classNames";
import cls from './loginModal.module.scss';
import {Modal} from "shared/ui/Modal";
import {LoginFormAsync} from "../LoginForm/LoginFormAsync";
import {Suspense} from "react";
import {Loader} from "shared/ui/Loader";

interface LoginModalProps {
    className?: string,
    isOpen: boolean,
    onClose: () => void,
}

export const LoginModal = (props: LoginModalProps) => {
    const {className, isOpen, onClose} = props;
    return (
        <Modal
            lazy
            isOpen={isOpen}
            onClose={onClose}
            className={classNames(cls.LoginModal, {}, [className])}>
            <Suspense fallback={<Loader/>}>
                <LoginFormAsync/>
            </Suspense>
        </Modal>
    );
};
