import React, { Component } from 'react'
import "../Styles/profile.css"
import ava from "../assets/avatarka.svg";

export default class Profile extends Component {
  render() {
    return (
      <div className='profile-block'>
        <div className='photo-block'>
            <div className='img-profile'>
            <img src={ava} className="profile-logo"></img>
            <p className='desc-profile'>Заика Дмитрий Владимирович</p>
            </div>
        </div>
       <div className='info-block'>
        <form>
       <label for='name' className='label-prf'>ФИО</label>
            <br></br>
            <input type={"text"} placeholder='ФИО' id='name' className='profileForm'></input>
            <br></br>
            <label for='mail' className='label-prf'>Email</label>
            <br></br>
            <input type={"email"} placeholder='Почта' id='mail' className='profileForm'></input>
            <br></br>
            <label for='telephone' className='label-prf'>Номер телефона</label>
            <br></br>
            <input type={"tel"} placeholder='Тел.' id='telephone' className='profileForm'></input>
            <br></br>
            <label for='password' className='label-prf'>Пароль</label>
            <br></br>
            <input type={"password"} placeholder='Пароль' id='password' className='profileForm'></input>
            <br></br>
            <button type={"submit"} className="btn-profile">Добавить</button>
            
        </form>

        </div>
      </div>
    )
  }
}
