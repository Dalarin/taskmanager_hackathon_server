import React, {useContext} from "react";
import{useState, useEffect} from 'react';
import CardCat from "./cardItem/CardItem";
import CardTask from "./cardItem/CardTask";
import Modal from "./Modal";
import '../Styles/taskCont.css';
import vector from '../assets/Vector.svg'
import{useParams, Link, useNavigate} from 'react-router-dom';
import { observer } from "mobx-react-lite";
import '../Styles/navbar.css';
import { Context } from "../index";
import { fetchTasks } from "../http/tasksAPI";
import { fetchTags }from "../http/tagAPI";
import { fetchTaskLists } from "../http/tasklistAPI";

const TaskCont = observer((props) =>{
  const { tasks } = useContext(Context);
  const { user } = useContext(Context)
  const { categoryTasks } = useContext(Context);
  const { tags } = useContext(Context);
  const [modalActive, setModalActive] = useState(false);

  const[name, setName] = useState('')
  const[desc, setDesc] = useState('')
  const[start, setStart] = useState('')
  const[finish, setFinish] = useState('')
  const[namelist, setNamelist] = useState('')

  const create_task = async () => {
    
    setModalActive(false);
  }

  useEffect(() => {
    fetchTasks(user.userId).then(data => {
      tasks.setTasks(data)
    })
    fetchTags(user.userId).then(data => {
      tags.setTags(data)
    })
    fetchTaskLists(user.userId).then(data => {
      categoryTasks.setCategoryTasks(data)
    }, [])
  })


    return(
       <div className="taskCont">

        <div className="blockMain">
        <div className="spisok">
          <h3 className="head">Списки задач</h3>
          {categoryTasks.categoryTasks.map(categoryTask => 
            <><br /><CardCat className="carcat" name={categoryTask.name} /></>
            )}
          

        </div>
        <div className="allTask">
          <h3>Все задачи</h3>
          {tasks.tasks.map(task => 
            tags.tags.map(tag => 
              <CardTask name={task.name} tags = {tag.name}/>
            )
          )}
        </div>
        </div>

        <button className="modal-button" onClick={()=>setModalActive(true)}><p> Добавить</p>
        </button>

        
        <Modal active={modalActive} setActive={setModalActive}>
        <div className="content">
        <img className="vector" src={vector} alt="" srcset="" />
        <div className="form">
        <form>
        <h4 className='hed'>Добавление задачи</h4>
            <label for='name' className='label'>Название</label>
            <br></br>
            <input type={"text"} placeholder='Название' id='name' className='inputForm' value={name} onChange={(e) => setName(e.target.value)}></input>
            <br></br>
            <label for='text' className='label'>Описание</label>
            <br></br>
            <input type={"email"} placeholder='Описание' id='mail' className='inputForm' value={desc} onChange={(e) => setDesc(e.target.value)}></input>
            <br></br>
            <div className="date">
              <div className="start">
              <label for='text' className='label'>Начало</label>
              <br />
              <input type={"email"} placeholder='Описание' id='mail' className='inputForm' value={start} onChange={(e) => setStart(e.target.value)}></input>
              </div>
              <div className="end">
              <label for='text' className='label'>Конец</label>
              <br />
              <input type={"email"} placeholder='Описание' id='mail' className='inputForm' value={finish} onChange={(e) => setFinish(e.target.value)}></input>
              </div>
              </div>
              <div className="categ">
              <label for="cars">Категория</label>
              <br />
              <select id="cars" value={namelist} onChange={(e) => setNamelist(e.target.value)}>
                <option value="volvo">Работа</option>
                <option value="saab">Обучение</option>
                <option value="opel">Уник</option>
                <option value="audi">Прогрроммирование</option>
              </select>
              </div>
            
        <button type='button' className='add' onClick={create_task}><p>Добавить</p></button>
        </form>
        </div>
        </div>
        </Modal>


       </div>
    )
})
export default TaskCont;