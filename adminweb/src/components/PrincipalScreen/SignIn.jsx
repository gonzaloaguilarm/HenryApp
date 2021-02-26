import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../database/database'

/* Estilos */
import {
  FormularioLog,
  Title,
  InputCont,
  Btn,
  TextoSocial,
  ContSocialMedia
} from '../PrincipalScreen/StyledPrincipal';

function SignIn({addUser}) {
  const [noInvited,setNoInvited] = useState(false)
  const [student,setStudent] = useState(false)
  const [register,setRegister] = useState(false)
 
  const initalState = {
    password: '',
    email: ''
  };

  const [
    users,
    setUsers
  ] = useState([]);
  const [
    invitedUsers,
    setInvitedUsers
  ] = useState([]);

  const [
    state,
    setState
  ] = useState(initalState);
  useEffect(() => {
    if (noInvited) {
      alert('El email no se encuentra en la base de datos de estudiantes invitados :(')
      setNoInvited(false)
    }
    if (student) {
      alert('Eres estudiante por favor dirijete a la app :(')
      setStudent(false)
    } 
    if(register){
      alert('No te has registrado aún :(')
      setRegister(false)
    }
  
  }, [noInvited, student, register])

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('user'))) {
      window.location.href = `${process.env.REACT_APP_API_URL}/vistaprincipal`;
    }
  })

  useEffect(() => {
    firebase.db.collection('invited instructor').onSnapshot((snap) => {
      const invitados = [];
      snap.docs.forEach((doc) => {
        const { email } = doc.data();
        invitados.push({
          email

        });
      });
      setInvitedUsers(invitados);

    });
    firebase.db.collection('users').onSnapshot((snap) => {
      const estudiantes = [];
      snap.docs.forEach((doc) => {
        const { email, rol, first_name, last_name, nacionalidad, photo, dni, github, phone, cohorte, grupo } = doc.data();
        estudiantes.push({
          cohorte,
          grupo,
          email,
          rol,
          first_name,
          last_name,
          nacionalidad,
          photo,
          dni,
          github,
          phone,
          id: doc.id
        });
      });
      setUsers(estudiantes);

    });
  }, []);

  const handleInputChange = function (e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
    
  }

  const handleSubmit = function (e) {
    e.preventDefault();
    console.log('works!')
  }


  const loginManual = async () => {
    
    if (state.email === '' || state.password === '') {
      if (state.email === '' || !state.email.includes('@')) {
        alert('Ingrese un email válido');
      }
      if (state.password === '') {
        alert('Ingrese un password');
      }
    }
    else {
      var found = users.find((user) => user.email === state.email);
      /* addUser(found) */
      if (found) {
        firebase.firebase
          .auth()
          .signInWithEmailAndPassword(state.email, state.password)
          .then((result) => {
            console.log(result)
            localStorage.setItem('user', JSON.stringify(found))
            if (found.rol === 'admin' || found.rol === 'instructor') {
              console.log('admin')
              window.location.href = `${process.env.REACT_APP_API_URL}/vistaprincipal`;
            }
            else {
              // alert('Eres estudiante por favor dirijite a la app')
              setStudent(true) 
            }
          })
          .catch((error) => {
            alert(error);
          });
      }
      else {
        // alert('El usuario no se ha registrado aún o no ha sido invitado');
        setRegister(true)
      }
    }
  };



  const loginGoogle = async () => {
    console.log('se ejecuta la funcionLoginGoogle');
    firebase.firebase
    	.auth()
      .signInWithPopup( await new firebase.firebase.auth.GoogleAuthProvider())
    	.then((result) => {
    		var found = invitedUsers.find((user) => user.email === result.user.email);
    		var found2 = users.find((user) => user.email === result.user.email);
     
    		if(!found){
    			// throw 'El email no se encuentra en la base de datos de estudiantes invitados :(';
          setNoInvited(true) 
    		}
    		if(!found2 && found){
          // console.log('registrese ')
          setRegister(true)
          // window.location.href = 'http://localhost:3000';
    		}
    		if (found2) {
          if (found2.rol === 'admin') {
           
            localStorage.setItem('user',JSON.stringify(found2))
            console.log('admin ')
            window.location.href = `${process.env.REACT_APP_API_URL}/vistaprincipal`;
    			}
    			else {
            // throw 'Eres estudiante por favor dirijite a la app'
            setStudent(true) 
    			}
    		}
    	})
    	.catch((error) => {
    		alert(error);
    	});
  };

  const loginGithub = async () => {
    console.log('se ejecuta la funcionLoginGithub');
    firebase.firebase
      .auth()
      .signInWithPopup( await new firebase.firebase.auth.GithubAuthProvider())
      .then( async (result) => {
        var found = invitedUsers.find((user) => user.email === result.user.providerData[0].email);
        var found2 = users.find((user) => user.email === result.user.providerData[0].email);
        if (!found) {
          // throw 'el email no se encuentra en la base de datos de estudiantes invitados :(';
          setNoInvited(true) 
        }
        if (!found2 && found) {
          // window.location.href = 'http://localhost:3000';
          setRegister(true)
        }
        if (found2) {
          if (found2.rol === 'admin') {
            
            localStorage.setItem('user', JSON.stringify(found2))
            console.log('admin') 
            window.location.href = `${process.env.REACT_APP_API_URL}/vistaprincipal`;
          }
          else {
            // throw 'Eres estudiante por favor dirijite a la app'
            setStudent(true) 
          }
        }
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
        <FormularioLog className='form-login' onSubmit={(e)=>e.preventDefault()}>
          <Title >Iniciar Sesión</Title>
          <InputCont >
            <i className="far fa-user"></i>
            <input type="email"
            placeholder="Correo" 
            name="email" 
              value={state.email}
            onChange={handleInputChange} 
            />
          </InputCont>
          <InputCont >
            <i className="fas fa-lock"></i>
            <input 
              type="password" 
              placeholder="Contraseña"
              name="password" 
              value={state.password}
              onChange={handleInputChange} 
            />
          </InputCont>
          <Btn 
            type="submit" 
            value="INICIAR SESION"
            onClick={loginManual} 
          />
          <TextoSocial>O inicia sesión con una de las plataformas</TextoSocial>
          <ContSocialMedia>
            <a onClick={loginGoogle}>
              <i className="fab fa-google"></i>
            </a>
            <a onClick={loginGithub}>
              <i className="fab fa-github"></i>
            </a>
          </ContSocialMedia>
        </FormularioLog>
  );
}



export default SignIn;
