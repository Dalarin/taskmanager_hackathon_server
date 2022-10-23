import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { observer } from "mobx-react-lite";
import jwt_decode from 'jwt-decode';
import { Context } from ".";
import { check } from "./http/userAPI";

const App = observer(() => {
  const [loading, setLoading] = useState(true); //Состояние, отвечающее за первую загрузку
  const { user } = useContext(Context);

  useEffect(() => {
    setTimeout(() => {
      check()
        .then((data) => {
          user.setUser(true);
          user.setIsAuth(true);
          user.setUserId((jwt_decode(localStorage.token).id))//Проверяем является ли пользователь администратором
        })
        .finally(() => setLoading(false));
    }, 1000);
  }, []);

  if (loading) {
    return null;
  }

  return (
    <BrowserRouter>
      {/*BrowserRouter нужен для работы навигации*/}
      <AppRouter />
      {/*Сам роутер*/}
    </BrowserRouter>
  );
});

export default App;
