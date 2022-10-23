import {makeAutoObservable} from "mobx"

export default class TagStore {
    constructor(){
        this._tags = []
        makeAutoObservable(this)//Следим за изменением переменных
    }

    //Actions (функции изменения состояния)
    setTags(tags){
        this._tags = tags
    }

    //Getters (Computed - функции для получения переменных из состояния)
    get tags(){
        return this._tags
    }
}