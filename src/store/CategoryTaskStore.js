import {makeAutoObservable} from "mobx"

export default class CategoryTaskStore {
    constructor(){
        this._categoryTasks = []
        makeAutoObservable(this)//Следим за изменением переменных
    }

    //Actions (функции изменения состояния)
    setCategoryTasks(categoryTasks){
        this._categoryTasks = categoryTasks;
    }

    //Getters (Computed - функции для получения переменных из состояния)
    get categoryTasks(){
        return this._categoryTasks
    }
}