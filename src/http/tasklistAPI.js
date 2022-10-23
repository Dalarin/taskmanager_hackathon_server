//Функции регистрации, авторизации и проверки токена на валидность
import { $authHost, $host } from "./index";

export const fetchTaskLists = async (userId) => {
    const {data} = await $host.get('api/tasklist/get', {params: {userId}})
    return data
}