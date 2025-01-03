import {useTheme} from './providers/ThemeProvider/index'
import {classNames} from 'shared/lib/classNames/classNames'
import {AppRouter} from 'app/providers/Router'
import {Navbar} from 'widgets/Navbar'
import {Sidebar} from 'widgets/Sidebar'
import {Suspense, useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import {userActions} from "entities/User";

const App = () => {

    const {theme} = useTheme()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={'Загрузка...'}>
                <Navbar/>
                <div className='content-page'>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App
