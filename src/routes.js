//Файл со всеми маршрутами в приложении. Сами маршруты берём из utils/consts.js
import Auth from "./pages/Auth"
import Main from './pages/Main'
import {MAIN_ROUTE, REGISTRATION_ROUTE, AUTH_ROUTE} from "./utils/consts"

//Список маршрутов для авторизованного пользователя
export const authRoutes = [
    {
        path: MAIN_ROUTE,//Путь
        Component: <Main/> //Cтраница
    },
]

//Публичные маршруты
export const publicRoutes = [
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth/>
    },
]