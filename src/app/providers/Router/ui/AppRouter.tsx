import {Route, Routes} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {routeConfig} from "shared/config/routeConfig/routeConfig";
import path from "path";
import {Suspense} from "react";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <div className="page-wrapper">
                <Routes>
                    {Object.values(routeConfig).map(({element, path}) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            </div>
        </Suspense>
    );
};

export default AppRouter;