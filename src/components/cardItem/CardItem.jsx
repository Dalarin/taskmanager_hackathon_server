import React from "react";
import{useState, useEffect} from 'react';
import Arrow from '../../assets/Arrow.svg';
import settings from '../../assets/Settings.svg';
import account from '../../assets/user.png';
import{useParams, Link, useNavigate} from 'react-router-dom';
import '../../Styles/cardCat.css';

const  CardItem = (props) =>{
   
    return(
      <div className="taskCard">
            <p className="name">{props.name}</p>
            <div className="progress">
              
            </div>
       </div>
    )
}
export default CardItem;