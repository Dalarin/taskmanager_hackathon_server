//Функции регистрации, авторизации и проверки токена на валидность
import { $authHost, $host } from "./index";

export const fetchTags = async (userId) => {
    const {data} = await $host.get('api/tag/get', {params: {userId}})
    return data
}

export const createTags = async (serId, name, color) => {
    const {data} = await $authHost.post('api/task/create', serId, name, color)
    return data
}

export const fetchTag = async (userId, id) => {
    const {data} = await $host.get('api/tag/get_one', {params: {userId, id}})
    return data
}

export const updateTag = async (userId, id, name, color) => {
    const {data} = await $authHost.put('api/task/update', userId, id, name, color)
    return data
}

export const deleteTag = async (userId, id, name, color) => {
    const {data} = await $authHost.put('api/task/update', userId, id, name, color)
    return data
}

