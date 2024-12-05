import { Link } from 'react-router-dom';
import {useTheme} from "./providers/ThemeProvider/index";
import {classNames} from "shared/lib/classNames/classNames";
import './styles/index.scss';
import {AppRouter} from "app/providers/Router";

const App = () => {

  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Сменить тему</button>
      <Link to={'/'}>Главная страница</Link>
      <Link to={'/about'}>О проекте</Link>
        <AppRouter/>
    </div>
  );
};

export default App;