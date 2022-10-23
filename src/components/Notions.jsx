import React, { Component } from 'react';
import "../Styles/notion.css";
import Modal from './Modal';
import{useState, useEffect} from 'react';
const  Notions = (props) =>{
  const [modalActive, setModalActive] = useState(false);
    return (
    <div className=''>
   <button className='notion' onClick={()=>setModalActive(true)}>
    <div className='notion-header'>
      {props.title}
    </div>
    <div className='notion-container'>
      {props.desc}
    </div>
   </button>
   <Modal active={modalActive} setActive={setModalActive}>
   <div>
                <h3 className="title">{props.title}</h3>
                <p className="desc">{props.desc} </p>
                <div>
                </div>
               <button className='del'>Удалить</button>
            </div>
   </Modal>
   </div>
    )
  
}
export default Notions;
