import React, { createContext }  from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import UserStore from "./store/UserStore";
import TaskStore from './store/TaskStore';
import CategoryTaskStore from './store/CategoryTaskStore'
import TagStore from './store/TagStore'


//Сюда помещаем значение из Contest.Provider, которое взято из UserStore
export const Context = createContext(null)
//Контекст позволяет передавать данные через дерево компонентов без необходимости передавать пропсы на промежуточных уровнях.


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Context.Provider value={{
    user: new UserStore(),//В поле user создаём объект класса UserStore()
    tasks: new TaskStore(),
    categoryTasks: new CategoryTaskStore(),
    tags: new TagStore(),
  }}>
      <App/>
  </Context.Provider>
);