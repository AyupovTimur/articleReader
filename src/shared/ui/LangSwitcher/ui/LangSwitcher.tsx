import {useTranslation} from 'react-i18next'
import 'shared/config/i18n/i18n'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './langSwitcher.module.scss'
import {Button} from 'shared/ui/Button'
import {ButtonTheme} from 'shared/ui/Button/ui/Button'
import Translate from 'shared/assets/icons/translate-language.svg'
import {type ReactElement} from 'react'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}: LangSwitcherProps): ReactElement => {
    const {t, i18n} = useTranslation()

    const toggleTranslate = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <div className={classNames(cls.LangSwitcher, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR} onClick={toggleTranslate}>
                <Translate className={classNames(cls.LangSwitcher, {}, [])}/>
            </Button>
        </div>

    )
}
