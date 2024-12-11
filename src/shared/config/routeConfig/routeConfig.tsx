import { MainPage } from 'pages/MainPage'
import { type RouteProps } from 'react-router-dom'
import { AboutPage } from 'pages/AboutPage'
import {NotFound} from "pages/NotFound";

export enum RouteConfigType {
  MAIN = 'main',
  ABOUT = 'about',
  NOTFOUND = 'notFound'
}

export const RoutePath: Record<RouteConfigType, string> = {
  [RouteConfigType.MAIN]: '/',
  [RouteConfigType.ABOUT]: '/about',
  [RouteConfigType.NOTFOUND]: '*'
}

export const routeConfig: Record<RouteConfigType, RouteProps> = {
  [RouteConfigType.MAIN]: {
    path: RoutePath.main,
    element: <MainPage/>
  },
  [RouteConfigType.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage/>
  },
  [RouteConfigType.NOTFOUND]: {
    path: RoutePath.notFound,
    element: <NotFound/>
  }
}
