//Функции регистрации, авторизации и проверки токена на валидность
import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode"

//Экспортируем функции

export const registration = async (email, password, fio, tel) => {
    //Ответ от сервера (POST - запрос с базовым URL (Те endpoints, которые на сервере) + тело запроса (email, password и тд))
    //Из response получаем тело запроса {data}
    const {data} = await $host.post('api/user/registration', {email, password, fio, tel})
    localStorage.setItem('token', data.token)//Помещаем токен из тела запроса в локальное хранилище
    return jwt_decode(data.token)//Возвращаем декодированный токен
}

export const login = async (email, password) => {
    //Ответ от сервера (POST - запрос с базовым URL (Те endpoints, которые на сервере) + тело запроса (email, password, role))
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)//Помещаем токен из тела запроса в локальное хранилище
    return jwt_decode(data.token)//Возвращаем декодированный токен 
}

//Данная функция каждый раз при обновлении страницы проверяет токен
//Если токен не валидный, пользователь разлогинивается
//Иначе пользователь попадает на страницу под своим аккаунтом
export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)//Помещаем токен из тела запроса в локальное хранилище
    return jwt_decode(data.token)//Возвращаем декодированный токен 
}