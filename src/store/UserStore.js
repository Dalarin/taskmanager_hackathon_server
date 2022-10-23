//Глобальное хранилище для пользователя. Работа с Mobx
import {makeAutoObservable} from "mobx"

export default class UserStore {
    constructor(){
        this._isAuth = false
        this._user = {}
        this._userId = null
        makeAutoObservable(this)//Следим за изменением переменных
    }

    //Actions (функции изменения состояния)
    setIsAuth(bool){
        this._isAuth = bool
    }

    setUser(user){
        this._user = user
    }

    setUserId(id){
        this._userId = id
    }

    //Getters (Computed - функции для получения переменных из состояния)
    get isAuth(){
        return this._isAuth
    }

    get user(){
        return this._user
    }
    get userId(){
        return this._userId
    }

}