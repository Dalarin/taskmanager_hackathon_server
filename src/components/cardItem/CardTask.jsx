import React from "react";
import{useState, useEffect} from 'react';
import '../../Styles/cardTask.css'
import{useParams, Link, useNavigate} from 'react-router-dom';
import '../../Styles/navbar.css'

const  CardTask = (props) =>{
    return(
       <div className="taskCard">
            <p className="name">{props.name}</p>
            <p className="tags">{props.tags}</p>
       </div>
    )
}
export default CardTask;