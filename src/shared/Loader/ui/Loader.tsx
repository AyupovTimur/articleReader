import {classNames} from "shared/lib/classNames/classNames";
import './loader.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({className}: LoaderProps) => {
    return (
        <div data-testid='loader' className={classNames('lds-roller', {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};
