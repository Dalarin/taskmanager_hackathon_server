import {makeAutoObservable} from "mobx"

export default class TaskStore {
    constructor(){
        this._tasks = []
        makeAutoObservable(this)//Следим за изменением переменных
    }

    //Actions (функции изменения состояния)
    setTasks(tasks){
        this._tasks = tasks
    }

    //Getters (Computed - функции для получения переменных из состояния)
    get tasks(){
        return this._tasks
    }
}