import React from "react";
import{useState, useEffect} from 'react';
import Arrow from '../assets/Arrow.svg';
import settings from '../assets/Settings.svg';
import account from '../assets/user.png';
import task from '../assets/sleep.svg';
import keep from '../assets/fire.svg';
import fire from '../assets/keep.svg';
import sleep from '../assets/task.svg';
import '../Styles/footer.css';
import '../Styles/keeps.css';
import Notions from './Notions.jsx';

const  Keeps = () =>{
    return(
      <div className="keeps">
        <div className="keep">
        <Notions title="Главная заадача" desc = "dfvdfkvjdkfbvkjdfnvkjdnfkjvndfkj" />
        </div>
        <Notions title="Главная заадача" desc = "Описание" />
        <Notions title="Главная заадача" desc = "Описание" />
        <Notions title="Главная заадача" desc = "Описание" />
       
      </div>
    )
}
export default Keeps;