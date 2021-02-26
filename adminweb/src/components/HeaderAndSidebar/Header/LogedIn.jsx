import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
/* Estilos */
import {
  ContenedorUser
} from '../stylesHeaderSide';
/* Import imagen */
import ImgUser from "../../../assets/Img/imgUser.png";


function LogedIn() {
  const [user, setUser] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true)
  }

  useEffect(() => {
    const userLog = JSON.parse(localStorage.getItem("user"))
    setUser(userLog);
  }, [])

  console.log(user);
  return (
    <ContenedorUser onClick={handleClick}>
      {user ?
        <>
          <div className={'text'}>
            <h5>{user.first_name}</h5>
            <p>{user.rol}</p>
          </div>
          <div className={'img-user'}>
            <img src={user.photo} alt='avatar'  with='60px' height='60px' />
          </div>
        </>
        :
        <>
          <div className={'text'}>
            <h5>Nicolas Valencia</h5>
            <p>Admin</p>
          </div>
          <div className={'img-user'}>
            <img src={ImgUser} alt='avatar'  with='60px' height='60px' />
          </div>
        </>
      }
    </ContenedorUser>
  );
}

export default LogedIn;



