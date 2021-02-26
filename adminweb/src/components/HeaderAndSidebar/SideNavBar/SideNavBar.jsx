import React, { useState } from 'react';
import { Link } from 'react-router-dom';
/* Estilos */
import {
  ContenedorSideBar,
} from '../stylesHeaderSide';


function SideNavBar({setSelect, setCargando}) {
  
  const [ activeUser, setActiveUser ] = useState('active');
  const [ activeBook, setActiveBook ] = useState('');
  const [ activeHat, setActiveHat ] = useState('');

  const signOut =()=> {
    localStorage.setItem('user', null)
    window.location.href = `${process.env.REACT_APP_API_URL}`;
  }

  const handlechange = (option)=>{
    if (option === 'activeUser'){
      setActiveUser('active');
      setActiveBook('');
      setActiveHat('');
      setSelect('Henry-student');
      setCargando(true);
      setTimeout(()=>{
        setCargando(false);
      }, 4000)
    }
    if (option === 'activeBook'){
      setActiveUser('');
      setActiveBook('active');
      setActiveHat('');
      setSelect('Henry-cohortes');
      setCargando(true);
      setTimeout(()=>{
        setCargando(false);
      }, 3500)
    }
    if (option === 'activeHat'){
      setActiveUser('');
      setActiveBook('');
      setActiveHat('active');
      setSelect('Instructores');
      setCargando(true);
      setTimeout(()=>{
        setCargando(false);
      }, 3000)
    }
  }
  return (
    <ContenedorSideBar>
      <div>
        <Link><i class="fas fa-sign-out-alt" onClick={signOut}></i></Link>
        <Link className={activeUser}><i class="far fa-address-book" onClick={()=> handlechange('activeUser')}></i></Link>
        <Link className={activeBook}><i class="fas fa-book" onClick={()=> handlechange('activeBook')}></i></Link>
        <Link className={activeHat}><i class="fas fa-graduation-cap" onClick={()=> handlechange('activeHat')}></i></Link>
      </div>
    </ContenedorSideBar>
  );
}

export default SideNavBar;