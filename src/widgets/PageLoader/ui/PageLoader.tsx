import {classNames} from "shared/lib/classNames/classNames";
import cls from './pageLoader.module.scss';
import {Loader} from "shared/ui/Loader";

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({className}: PageLoaderProps) => {
    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader/>
        </div>
    )
}
