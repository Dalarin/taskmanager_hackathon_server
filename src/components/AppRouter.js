//Компонент для навигации по страницам 
import React, { useContext } from "react";
import {Routes, Route} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import { AUTH_ROUTE } from "../utils/consts";
import Auth from "../pages/Auth";
import { Context } from "../index";


const AppRouter = () => {
  const {user} = useContext(Context)

    //Вывод глобального хранилища
    console.log(user)

  return (
      <Routes>
        {user.isAuth && authRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={Component} exact/>
        )}
        {publicRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={Component} exact/>
        )}
        <Route path={AUTH_ROUTE} element={<Auth/>}/>{/*В случае неопознанного запроса редиректимся на страницу магазина*/}
      </Routes>
  );
}

export default AppRouter;