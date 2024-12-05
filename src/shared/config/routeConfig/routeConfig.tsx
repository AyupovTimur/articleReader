import { MainPage } from "pages/MainPage";
import {RouteProps} from "react-router-dom";
import {AboutPage} from "pages/AboutPage";

export enum RouteConfigType {
    MAIN = 'main',
    ABOUT = 'about',
}

export const RoutePath: Record<RouteConfigType, string> = {
    [RouteConfigType.MAIN]: '/',
    [RouteConfigType.ABOUT]: '/about',
}

export const routeConfig: Record<RouteConfigType, RouteProps> = {
    [RouteConfigType.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [RouteConfigType.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    }
}