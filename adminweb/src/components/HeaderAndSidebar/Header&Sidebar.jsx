import React, { useState ,useEffect} from 'react';
import Header from './Header/Header';
import SideNavBar from './SideNavBar/SideNavBar';
import HenryStudent from '../ContentShow/HenryStudent';
import Cohortes from '../ContentShow/Cohortes';
import Instructores from '../ContentShow/Instructores';
import Spinner from '../Spinner/Spinner'
/* Estilos */
import {
  Contenedor,
  ContenedirInfoSelect
} from './stylesHeaderSide';

const HeaderSidebar = () => {
  const [ select, setSelect ] = useState('Henry-student');
  const [ cargando, setCargando ] = useState(false)
  useEffect(() => {
    if(!JSON.parse(localStorage.getItem('user'))){
      window.location.href = `${process.env.REACT_APP_API_URL}`;
    }
  })

  const componenteStudent = (cargando ? <Spinner /> : <HenryStudent />);
  const componenteCohorte = (cargando ? <Spinner /> : <Cohortes />);
  const componenteInstructores = (cargando ? <Spinner /> : <Instructores />)

  return ( 
    <Contenedor>
      <Header />
      <SideNavBar setSelect={setSelect} setCargando={setCargando} />
      { select === 'Henry-student' ?
        <ContenedirInfoSelect>
          {componenteStudent}
        </ContenedirInfoSelect> : null}
      { select === 'Henry-cohortes' ?
      <ContenedirInfoSelect>
          {componenteCohorte}
      </ContenedirInfoSelect> : null}
      { select === 'Instructores' ?
      <ContenedirInfoSelect>
          {componenteInstructores}
      </ContenedirInfoSelect> : null}
    </Contenedor>
   );
}
 
export default HeaderSidebar;