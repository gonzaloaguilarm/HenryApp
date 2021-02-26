import React, { useEffect, useState } from 'react';
import firebase from '../../database/database'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

/* Estilos */
import {
  ContenedorPanel,
  DetalleUser,
  InfoSelect,
  ContCohorteSelect,
  ContenedorImagen,
  InvitarUsuario,
  ContInCard,
  InputForm,
  BtnForm,
  CalendarTimer,
  CheckBox,
  ListaEstudiantes,
  Table,
  Thead,
  Tbody
} from './StyledContents';
/* Import imagen */
import ImgEmpty from "../../assets/Img/empty.svg";
import ImgUser from "../../assets/Img/imgUser.png";
import ImgHenry from "../../assets/Img/henry_logo.jpg";

function Cohortes() {
  //===========COHORTES DE BASE DE DATOS===========//
  const [
    cohortes,
    setCohortes
  ] = useState([]);

  useEffect(() => {
    firebase.db.collection('cohorte').onSnapshot((snap) => {
      const allCohortes = [];
      snap.forEach((doc) => {
        const { comienzo, fin, modalidad, instructor, nombre, id } = doc.data();
        allCohortes.push({
          nombre,
          id: doc.id,
          comienzo,
          fin,
          modalidad,
          instructor
        });
      });
      setCohortes(allCohortes);
    });
  }, []);

  //===========CREAR COHORTE===========//

  //Botones Full Time - Part Time
  const [index, setIndex] = useState('')
  const buttons = ['Full Time', 'Part Time']
  const updateIndex = (i) => {
    setIndex(i)
    console.log('MODALIDAD:', (buttons[index]))
    handleChangeText(buttons[i], 'modalidad')
  }

  //DatePicker
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndtDate] = useState(new Date());

  const handleDatePickedStart = (date) => {
    let newDate = date && date.toString().split(" ")
    let returnDate = [newDate[2], getMonthOfDate(newDate[1]), newDate[3]]
    handleChangeText(returnDate.join("/"), 'fecha_de_inicio')
  }
  const handleDatePickedEnd = (date) => {
    let newDate = date && date.toString().split(" ")
    let returnDate = [newDate[2], getMonthOfDate(newDate[1]), newDate[3]]
    handleChangeText(returnDate.join("/"), 'fecha_de_finalizacion')
  };

  const getMonthOfDate = name => {
    return ("JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(name) / 3 + 1)
  }

  useEffect(() => {
    handleDatePickedStart(startDate)
  }, [startDate])

  useEffect(() => {
    handleDatePickedEnd(endDate)
  }, [endDate])

  //Numero de Cohorte List
  const [check, setCheck] = useState('')
  const handleCheckBox = (e) => {
    setCheck(e.target.value);
    handleChangeText(check, 'checkeado')
  }

  //Eliminar usuario
  const handleDelete = async id =>{
    if(window.confirm('¿ Esta seguro que desea eliminar esta Cohorte ?')){
      console.log(id);
      await firebase.db.collection('cohorte').doc(id).delete();
      alert('Cohorte eliminada correctamente ')
    }
    
  }

  //Estado Inicial de Crear Cohorte 
  const initalState = {
    numero_de_cohorte: '',
    modalidad: '',
    fecha_de_inicio: '00/00/0000',
    fecha_de_finalizacion: '00/00/0000',
    instructor: '',
    checkeado: ''
  };

  const [state, setState] = useState(initalState);
  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
    console.log('state', state)
  };

  //===========CREAR COHORTE EN FIREBASE===========//
  const saveNewCohorte = async () => {
    for (var i = 0; state.length < i; i++) {
      console.log(state[i]);
    }
    if (state.modalidad === '') {
      alert('Ingrese modalidad');
    }
    if (state.fecha_de_inicio === '') {
      alert('Ingrese fecha de inicio');
    }
    if (state.fecha_de_finalizacion === '') {
      alert('Ingrese fecha de finalizacion');
    }
    if (state.instructor === '') {
      alert('Ingrese un instructor');
    }
    if (state.checkeado !== 'on') {
      return alert(`Checkear box de seguridad!`)
    }
    else {
      try {
        await firebase.db.collection('cohorte').add({
          nombre: state.numero_de_cohorte,
          modalidad: state.modalidad,
          comienzo: state.fecha_de_inicio,
          fin: state.fecha_de_finalizacion,
          instructor: state.instructor,
        });
        alert(`Cohorte creada con exito!`);
      } catch (error) { 
        alert('Hubo un error al crear la Cohorte!');
      }
    }
  };

  //===========ELIMINA COHORTE===========//

  const eliminarCohorte = async (id) => {
    console.log(id)
    let r = window.confirm("Esta seguto de eliminar el Cohorte seleccionado?");
    try {
      if (r) {
        const algo = await firebase.db.collection('cohorte').doc(id).delete()
        console.log(algo)
        alert('Cohorte Eliminado!')
      } else {
        console.log('Nothing to delete')
      }
    } catch (err) {
      alert(err)
    }
  }
  //===========SELECCIONA COHORTE===========//
  const [cohorte, setCohorte] = useState(false)
  const handleEdit = async (item) => {
    //===========MOSTRAR GRUPOS DENTRO DE COHORTE===========//
    await firebase.db.collection('cohorte').doc(item.id).collection('grupos').onSnapshot((snap) => {
      const grupos = [];
      snap.docs.forEach((doc) => {
        const { alumnos, numero, pms } = doc.data();
        grupos.push({
          alumnos,
          numero,
          pms
        })
      })
      setCohorte({ ...item, grupos: grupos })
    })
    console.log('Cohorte', cohorte)
  }

  //===========CREAR GRUPOS DENTRO DE COHORTE===========//
  const [panelGrupos, setPanelGrupos] = useState(false)
  const [alumnosList, setAlumnosList] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [grupos, setGrupos] = useState([])
  const [PMs, setPMS] = useState([])
  const [alumnos, setAlumnos] = useState([])
  const alumnosInsertados = []
  const numero = cohorte.nombre

  useEffect(() => {
    firebase.db.collection('cohorte').doc(cohorte.id).collection('grupos').onSnapshot((snap) => {
      const grupo = [];
      snap.docs.forEach((doc, i) => {
        const { alumnos, pms } = doc.data()
        if (alumnos === undefined && pms === undefined) {
          setGrupos(grupo)
        } else {
          grupo.push({
            alumnos,
            pms
          })
        }
      });
      setGrupos(grupo)
    });
    firebase.db.collection('users').where('rol', '==', 'pm').onSnapshot((snap) => {
      const pms = [];
      snap.docs.forEach((doc) => {
        const { last_name, first_name } = doc.data()
        pms.push({
          last_name,
          first_name,
          id: doc.id
        })
      });
      setPMS(pms)
    });
    firebase.db.collection('users').where('rol', '==', 'student').onSnapshot((snap) => {
      const students = [];
      snap.docs.forEach((doc) => {
        const { last_name, first_name, cohorte, grupo } = doc.data()
        if (cohorte === numero && grupo === undefined) {
          students.push({
            last_name,
            first_name,
            idAlumn: doc.id
          })
        }

      });
      setAlumnos(students)
      console.log('ALUMNOSS', students)
    });
  }, [panelGrupos])

  /////////////////////////////////////////////////////////
  const estadoInicial = {
    alumnos: [],
    pms: {},
  };
  const [estado, setEstado] = useState(estadoInicial);
  const handleInsertAlumno = (al) => {
    alumnosInsertados.push({ al })
    setEstado({ ...estado, alumnos: alumnosInsertados });
    console.log('estado', estado)
  }
  const handlePMs = (pm) => {
    setState({
      ...estado,
      pms: {
        last_name: pm.last_name,
        first_name: pm.first_name,
        id: pm.id,
      }
    })
    console.log('estado', estado)
  }

  const crearGrupos = async () => {
    console.log('Entre')
    for (var i = 0; estado.length < i; i++) {
      console.log(estado[i]);
    }
    if (estado.alumnos === '') {
      alert('Ingrese alumnos');
    }
    if (estado.pms === '') {
      alert('Ingrese PMs');
    }
    else {
      try {
        firebase.db.collection('cohorte').doc(cohorte.id).collection('grupos').add({
          numero: grupos.length + 1,
          pms: estado.pms,
          alumnos: estado.alumnos,
        })
        estado.alumnos.forEach((al, i) => {
          firebase.db.collection('users').doc(al.idAlumn).update({
            grupo: grupos.length
          })
        });
        alert(`Grupo creado con exito!`);
      } catch (error) {
        alert(error);
      }
    }
  };

  ///////////////////////
  const [grupo, setGrupo] = useState('')
  const handleGroup = (group) => {
    console.log(group)
    setGrupo(group)
  }

  return (
    <div>
      <ContenedorPanel className='panel-estudiantes'>
        <h2>Panel Cohortes Henry</h2>
        <DetalleUser >
          <h4>Selecciona un Cohorte</h4>
          {!cohorte
            ? <InfoSelect>
              <h3> Seleccione una Cohorte para conocer sus detalles</h3>
              <div className='img-user'>
                <img src={ImgEmpty} alt='avatar' />
              </div>
            </InfoSelect>
            : <ContCohorteSelect>
              <div className='cont-info-loc'>
                <ContenedorImagen  className='henry-logo'>
                    <img src={ImgHenry} alt='avatar' with='50px' height='50px' />
                </ContenedorImagen>
                <h3>HENRY WORLD</h3>
                <h4>Chorte {cohorte.nombre}</h4>
                <label><strong>Instructor a cargo:</strong>{cohorte.instructor}</label>
                <label><strong>Fecha de Inicio:</strong>{cohorte.comienzo}</label>
                <label><strong>Fecha de Finalizacion:</strong>{cohorte.fin}</label>
                <label><strong>Modalidad:</strong>{cohorte.modalidad}</label>
                <label>
                  <strong>Grupos:</strong> 
                  <div className='list-grup-inf'>
                  {cohorte.grupos.length && 
                    cohorte.grupos.map((i) => 
                      <>
                        <button className='btn-email' onClick={() => handleGroup(i)}>{i.numero}</button>
                      </>)}
                  </div>
                </label>
                {grupo && <>
                  <label><strong>Numero de Grupo:</strong>{grupo.numero}</label>
                  <label><strong>PM Asignado:</strong>{grupo.pms.first_name || 'No Asignado'}</label> 
                  <label><strong>Alumnos:</strong>{grupo.alumnos.length}</label>
                  <button className='btn-email' onClick={()=>setGrupo('')}>Atras</button>
                </>}
                <button className='btn-email' onClick={() => { setPanelGrupos(true) }}>Crear Grupos</button>
              </div>
            </ContCohorteSelect>}
        </DetalleUser>
        {panelGrupos ?
          <InvitarUsuario >
            <h4>Crear Grupos</h4>
            <ContInCard>
              <div className='info'>
                <h4>Un espacio intimo para el aprendizaje</h4>
                <p>Crea un nuevo Grupo dentro del Cohorte,
                asigna alumnos  a los mismos para que puedan
                compartir y despejar dudas que surjan
                acompañados de sus PMs a lo largo de su carrera
              </p>
              </div>
              <div className="cont-form create-grup">
                <InputForm>
                  <div>
                    <label>Numero de Grupo:</label>
                  </div>
                  <div>
                    <p>{grupos.length + 1}</p>
                  </div>
                </InputForm>

                <InputForm>
                  <div>
                    <label>Asignar Alumnos:</label>
                  </div>
                  <div>
                    <button className='btn-email' onClick={() => setAlumnosList(!alumnosList)}>Alumnos</button>
                  </div>
                </InputForm>

                <InputForm>
                  <div>
                    <label>Asignar PMs:</label>
                  </div>
                  <div>
                    <button className='btn-email' onClick={() => setDropdown(!dropdown)}>PMs</button>

                  </div>
                </InputForm>
                {dropdown &&
                  <InputForm>
                  <div>
                    <label>PMs:</label>
                  </div>
                  <div>
                    <select style={{margin: 'auto'}}>
                      {
                        PMs.map((pm, i) => (
                          <option onClick={() => handlePMs(pm)} key={i} value={`${pm.last_name}`}>{`${pm.last_name} ${pm.first_name}`}</option>
                        ))
                      }
                    </select>
                  </div>
                  </InputForm>
                }

                <button className='btn-email space' onClick={crearGrupos}>
                  CREAR GRUPO
                </button>
                <button className='btn-email' onClick={() => setPanelGrupos(false)}>
                  ATRAS
                </button>
              </div>
            </ContInCard>
          </InvitarUsuario>
          :
          <InvitarUsuario >
            <h4>Crea una nueva Cohorte</h4>
            <ContInCard>
              <div className='info'>
                <h4>Un nuevo comienzo para futuros Henry's</h4>
                <p>Crea una Cohorte donde nuevos estudiantes
                de henry inician un cambio en su vida
                profesional, ayudando con su formación y aprendizaje.
              </p>
              </div>

              <div className="cont-form create-grup">
                <InputForm >
                  <div>
                    <label>Cohorte N°:</label>
                  </div>
                  <div>
                    <select value={state.numero_de_cohorte} onChange={(e) => handleChangeText(e.target.value, 'numero_de_cohorte')}>
                      <option value="01" >01</option>
                      <option value="02" >02</option>
                      <option value="03" >03</option>
                      <option value="04" >04</option>
                      <option value="05" >05</option>
                      <option value="07" >07</option>
                      <option value="08" >08</option>
                      <option value="09" >09</option>
                      <option value="10" >10</option>
                      <option value="11" >11</option>
                      <option value="12" >12</option>
                      {state.numero_de_cohorte}
                    </select>
                  </div>
                </InputForm>
                <InputForm>
                  <div>
                    <label>Modalidad:</label>
                  </div>
                  <BtnForm>
                    <button
                      onClick={() => updateIndex(0)}
                      style={{ border: index === 0 ? '1px solid black' : 'none' }}>
                      Full Time
                    </button>
                    <button
                      onClick={() => updateIndex(1)}
                      style={{ border: index === 1 ? '1px solid black' : 'none' }} >
                      Part Time
                    </button>
                  </BtnForm>
                </InputForm>
                <InputForm>
                  <div>
                    <label>Fecha de inicio:</label>
                  </div>
                  <CalendarTimer>
                    <DatePicker
                      dateFormat="dd/MM/yyyy"
                      selected={startDate}
                      onChange={date => setStartDate(date)}
                    />
                    <i className="calendar-alt"></i>
                  </CalendarTimer>
                </InputForm>
                <InputForm>
                  <div>
                    <label>Fecha de finalizacion:</label>
                  </div>
                  <CalendarTimer>
                    <DatePicker
                      dateFormat="dd/MM/yyyy"
                      selected={endDate}
                      onChange={date => setEndtDate(date)}
                    />
                    <i className="calendar-alt"></i>
                  </CalendarTimer>
                </InputForm>
                <InputForm >
                  <div>
                    <label>Instructor</label>
                  </div>
                  <div>
                    <select value={state.instructor} onChange={(e) => handleChangeText(e.target.value, 'instructor')}>
                      <option value="Franco Etcheverry" >Franco Etcheverry</option>
                      <option value="Toni Tralice" >Toni Tralice</option>
                      {state.instructor}
                    </select>
                  </div>
                </InputForm>
                <CheckBox>
                  <input name="checkeado" type="checkbox" onClick={handleCheckBox} />
                  <label>
                    Seguro que desea crear un nuevo Cohorte?
                  </label>
                </CheckBox>
                <button className='btn-email' onClick={saveNewCohorte}>
                  CREAR COHORTE
                </button>
              </div>
            </ContInCard>
          </InvitarUsuario>
        }
      </ContenedorPanel>

      {alumnosList ?
        <ListaEstudiantes>
          <h2>Lista de estudiantes de Henry</h2>
          <Table>
            <Thead>
              <tr>
                <th></th>
                <th>Nombre y Apellido</th>
                <th>Asignar a Grupo</th>
              </tr>
            </Thead>
            <Tbody>
              {alumnos && alumnos.map((al, index) => (
                <tr key={index}>
                  <td><img src={ImgUser} alt='user-avatar' with='30px' height='30px' /></td>
                  <td>{al.first_name}{' '}{al.last_name}</td>
                  <td><button onClick={() => { handleInsertAlumno(al) }} >Asignar</button></td>
                </tr>
              ))}
            </Tbody>
          </Table>
        </ListaEstudiantes>
        :
        <ListaEstudiantes>
          <h2>Lista de Cohortes de Henry</h2>
          <Table>
            <Thead>
              <tr>
                <th>Cohorte</th>
                <th>Modalidad</th>
                <th>Fecha de Inicio</th>
                <th>Fecha de Finalizacion</th>
                <th>Instructor</th>
                <th></th>
                <th></th>
              </tr>
            </Thead>
            <Tbody>
              {cohortes && cohortes.sort((a, b) => a.nombre - b.nombre).map((item, index) => (
                <tr key={index}>
                  <td>
                    <div>
                      <img src={ImgHenry} alt='item-avatar' with='30px' height='30px' />
                      {' '}<strong>{item.nombre}</strong>
                    </div>
                  </td>
                  <td>{item.modalidad}</td>
                  <td>{item.comienzo}</td>
                  <td>{item.fin}</td>
                  <td>{item.instructor}</td>
                  <td><button className='btn-email' onClick={() => { handleEdit(item) }} >Ver</button></td>
                  <td><button className='btn-email' onClick={() => { eliminarCohorte(item.id) }}>Delete</button></td>
                </tr>
              ))}
            </Tbody>
          </Table>
        </ListaEstudiantes>
      }

    </div >
  );
}

export default Cohortes;