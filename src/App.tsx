import { Link, Route, Routes } from 'react-router-dom';
import { CountAsync } from './components/Count/CountAsync';
import { MainAsync } from './components/Main/MainAsync';
import { Suspense } from 'react';
import './styles/index.scss';
import useTheme from './theme/useTheme';
import {classNames} from "./helpers/classNames/classNames";

const App = () => {

  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Сменить тему</button>
      <Link to={'/main'}>Главная страница</Link>
      <Link to={'/count'}>Счетчик</Link>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path={'/count'} element={<CountAsync />} />
          <Route path={'/main'} element={<MainAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;