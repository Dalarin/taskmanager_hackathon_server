import React from "react";
import{useState, useEffect} from 'react';
import task from '../assets/sleep.svg';
import keep from '../assets/fire.svg';
import fire from '../assets/keep.svg';
import sleep from '../assets/task.svg';
import{useParams, Link, useNavigate} from 'react-router-dom';
import '../Styles/footer.css';
import {MAIN_ROUTE} from '../utils/consts';

const  Navbar = (props) =>{
    const menuCont = document.querySelectorAll('.imgTask');
    const menuparent = document.querySelector('.menu');
    
    function Change(el){
      // Берем наш элемент, и делаем с ним что хотим (меняю цвет на красный)
      el.classList.add("red");
    }


    return(
       <div className="footer">
        <div className="menu">
          <ul>
            <li onclick="Change(this)"><Link to={MAIN_ROUTE}><img className="imgTask" src={task} alt="" srcset="" /></Link></li>
            <li onclick="Change(this)"><Link to='#'><img className="imgTask" src={keep} alt="" srcset="" /></Link></li>
            <li onclick="Change(this)"> <Link to='#'><img className="imgTask" src={fire} alt="" srcset="" /></Link></li>
            <li onclick="Change(this)"> <Link to='#'><img className="imgTask" src={sleep} alt="" srcset="" /></Link></li>
          </ul>
        </div>
       </div>
    )
}
export default Navbar;