//Страница с авторизацией
import React, { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AUTH_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import '../Styles/auth.css'
import { registration, login } from "../http/userAPI";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation(); //Хук для получения маршрута в строке запроса
  const navigate = useNavigate()
  const isLogin = location.pathname === AUTH_ROUTE;
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fio, setFio] = useState("")
  const [tel, setTel] = useState("");

  //Функция под авторизацию и регистрацию
  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);

      } else {
        data = await registration(
          email,
          password,
          fio,
          tel,
        );
      }
      user.setUser(user); //В хранилище сохраняем данные о пользователе
      user.setIsAuth(true);
      console.log(data)
      //Переходим на страницу магазина
      navigate(MAIN_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }
  };

  return (
    <>
    <div className="App">
      <header className="App-header">
      <div className='auth-content'>
        <div className='auth-form'>
        {!isLogin ? (
          <form>
          <h4 className='hed'>Вход в аккаунт</h4>
              <label for='name' className='label'>ФИО</label>
              <br></br>
              <input type={"text"} placeholder='ФИО' id='name' className='inputForm' value={fio} onChange={(e) => setFio(e.target.value)}></input>
              <br></br>
              <label for='mail' className='label'>Email</label>
              <br></br>
              <input type={"email"} placeholder='Почта' id='mail' className='inputForm' value={email} onChange={(e) => setEmail(e.target.value)}></input>
              <br></br>
              <label for='tel' className='label'>Телефон</label>
              <br></br>
              <input type={"number"} placeholder='Телефон' id='tel' className='inputForm' value={tel} onChange={(e) => setTel(e.target.value)}></input>
              <br></br>
              <label for='password' className='label' >Пароль</label>
              <br></br>
              <input type={"password"} placeholder='Пароль' id='password' className='inputForm' value={password} onChange={(e) => setPassword(e.target.value)}></input>
          </form>
        ) : (
        <form>
        <h4 className='hed'>Вход в аккаунт</h4>
            <label for='mail' className='label'>Email</label>
            <br></br>
            <input type={"email"} placeholder='Почта' id='mail' className='inputForm' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <br></br>
            <label for='password' className='label'>Пароль</label>
            <br></br>
            <input type={"password"} placeholder='Пароль' id='password' className='inputForm' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </form>
        )}  
        </div>
        {isLogin ? (
              <><h3 className='reg'>Нет аккаунта?<NavLink to={REGISTRATION_ROUTE} className='reglink'>Зарегестрируйтесь </NavLink> </h3></>
            ) : (
              <><h3 className='reg'>Есть аккаунт?<NavLink to={AUTH_ROUTE} className='reglink'>Войти в аккаунт</NavLink> </h3></>
            )}
            <button onClick={click} type='button' className='button-auth'>Войти</button>
     </div>
      </header>
    </div>
    </>
  );
});

export default Auth;
