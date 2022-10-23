import React, { useContext } from "react";
import{useState, useEffect} from 'react';
import Arrow from '../assets/Arrow.svg';
import settings from '../assets/Settings.svg';
import account from '../assets/user.png';
import{Link, useNavigate} from 'react-router-dom';
import '../Styles/navbar.css'
import exit from '../assets/exit.jpg'
import { Context } from "../index"
import { AUTH_ROUTE } from "../utils/consts";

const  Navbar = (props) =>{
    const { user } = useContext(Context);
    const navigate  = useNavigate()

    const logout = () => {
        user.setUser({})
        user.setIsAuth(false)
        user.setUserId(null)
        localStorage.removeItem('token')
        navigate(AUTH_ROUTE)
    }
  
    return(
        <div className="navbar">
            <button className="arrow" onClick={() => navigate(-1)}><img src={Arrow} alt="" srcset="" /></button>
            <h1 className="head">{props.head}</h1>
            <div className="end">
            <Link to = '#'><img className="account" src={account} alt="Аккаунт" srcset="" /></Link>
            <Link to = '#'><img className="settings" src={settings} alt="Настройки" srcset="" /></Link>
            <Link to = '#'><img className="exit" src={exit} alt="Настройки" srcset="" onClick={() => logout()}/></Link>
            </div>
        </div>
    )
}
export default Navbar;