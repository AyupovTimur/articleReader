import {useTranslation} from 'react-i18next'
import {Counter} from "entities/Counter";

const MainPage = () => {
    const {t} = useTranslation('main')
    return (
        <div>
            <div>{t('Главная страница')}</div>
            <Counter/>
        </div>
    )
}

export default MainPage
