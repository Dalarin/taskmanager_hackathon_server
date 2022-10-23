//Функции регистрации, авторизации и проверки токена на валидность
import { $authHost, $host } from "./index";

export const fetchTasks = async (userId) => {//GET
    const {data} = await $host.get('api/task/get', {params: {userId}})
    return data
}

export const fetchTask = async (userId, id) => {//GET
    const {data} = await $host.get('api/task/get_one', {params: {userId, id}})
    return data
}

export const createTask = async (userId, name, description, date_of_finish, date_of_start) => {
    const {data} = await $authHost.post('api/task/create', userId, name, description, date_of_finish, date_of_start)
    return data
}

export const setDone = async (id, done) => {
    const {data} = await $authHost.post('api/task/set_done', id, done)
    return data
}

export const updateTask = async (name, description, date_of_finish, done) => {
    const {data} = await $authHost.put('api/task/update', name, description, date_of_finish, done)
    return data
}

export const deteleTask = async (userId, id) => {
    const {data} = await $authHost.delete('api/task/delete', userId, id)
    return data
}

export const addTaskInList = async (id, taskListId) => {
    const {data} = await $authHost.post('api/task/add_task_in_list', id, taskListId)
    return data
}

export const deleteTaskFromList = async (id, taskListId) => {
    const {data} = await $authHost.delete('api/task/del_task_from_list', id, taskListId)
    return data
}

export const getWithDate = async (date_of_finish, userId) => {//GET
    const {data} = await $host.get('api/task/datesort', {params: {date_of_finish, userId}})
    return data
}

export const addTagInTask = async (id, tagId) => {
    const {data} = await $authHost.post('api/task/add_tag', id, tagId)
    return data
}

export const deleteTagFromTask = async (id, tagId) => {
    const {data} = await $authHost.delete('api/task/del_tag', id, tagId)
    return data
}

export const acceptInvite = async (userId, taskId) => {
    const {data} = await $authHost.post('api/task/accept_invite', userId, taskId)
    return data
}


export const getListsOfTaskList = async (listId) => {//GET
    const {data} = await $host.get('api/task/get_list_of_task', {params: {listId}})
    return data
}


export const checkIfContains = async (taskId, listId) => {//GET
    const {data} = await $host.get('api/task/check_if_cont', {params: {taskId, listId}})
    return data
}