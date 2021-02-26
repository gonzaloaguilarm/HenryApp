import styled from 'styled-components'

export const ContenedorPanel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;
  & > h2{
    width: 100%;
    margin-bottom: 1rem;
  }
`
export const DetalleUser = styled.div`
  width: 38%;
  min-height: 400px;
  max-height: 400px;
  background-color: white;
  box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.35);
  & > h4{
    height: 65px;
    line-height: 65px;
    padding: 0 20px;
    border-bottom: 2px solid #707070;
  }
`
export const FormAlumno = styled.form`
  width: 100%;
  height: 84%;
  padding: 20px;
  display: grid;
  grid-template-columns: 50% 50%;
`
export const AlumnoInfo = styled.div`
  padding: 10px 20px 10px 0;
  max-height: 295px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  & > input[type=submit]{
    width: 85%;
    border: none;
    background-color: #FFFF01;
    padding: 7px;
    border-radius: 10px;
  }
`
export const AlumnoInfoExtra = styled.div`
  max-height: 295px;
  background-color: #FFFF01;
  border-radius: 40px; 
  padding: 20px 30px;
  display: grid;
  grid-template-rows: 25%; 
`
export const ContCohorteSelect = styled.div`
  width: 100%;
  height: 84%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center; 
  & > .cont-info-loc{
    margin: 20px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; 
    overflow: scroll;
    & > label{
      min-width: 100%;
      display: grid;
      grid-template-columns: 50% 50%;
      margin-bottom: 3px;
      & > strong{
        margin: auto 0;
      }
      & > .list-grup-inf{
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
    & .btn-email{
        margin-top: 5px;
        width: 45%;
        border: none;
        background-color: #FFFF01;
        padding: 7px;
        border-radius: 10px;
    }
    & > .henry-logo{
      max-width: 100px !important;
      min-width: 100px !important;
      max-height: 50px !important;
      min-height: 50px !important;
    }
    & > h3{
      margin: 5px;
    }
  }
`
export const ContenedorImagen = styled.div`
  max-width: 120px;
  min-width: 120px;
  max-height: 120px;
  min-height: 120px;
  & > img{
    width: 100%;
    height: 100%;
  }
`
export const InfoSelect = styled.div`
  text-align: center;
  padding: 20px 20px;
  & > h3{
    margin-bottom: 20px;
  }
  & > div{
    width: 100%;
    height: 60%;
    & > img{
      width: 50%;
      max-height: 100%;
    }
  }
`
export const InvitarUsuario = styled.div`
  width: 60%;
  min-height: 400px;
  max-height: 400px;
  background-color: white;
  box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.35);
  & > h4{
    height: 65px;
    line-height: 65px;
    padding: 0 20px;
    border-bottom: 2px solid #707070;
  }
`
export const ContInCard = styled.div`
  width: 100%;
  height: 84%;
  display: flex;
  justify-content: space-between;
  & > .info{
    margin-top: auto;
    width: 35%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    padding: 20px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: #FFFF01;
    & > h4{
      margin-bottom: 10px;
      font-size: 19px;
    }
  }
  & > .child2{
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > .btn-email{
      width: 85%;
      border: none;
      background-color: #FFFF01;
      padding: 7px;
      border-radius: 10px;
    }
  }
  & > .child3{
    width: 30%;
    height: 70%;
    margin: auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-right: 10px;
    & > .img-user{
      width: 100%;
      height: 60%;
      & > img{
        width: 100%;
        max-height: 100%;
      }
    }
    & > button{
      width: 85%;
      border: none;
      background-color: #FFFF01;
      padding: 7px;
      border-radius: 10px;
    }
  }
  & > .child4{
    width: 60%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  & > .cont-form{
      padding: 20px;
      min-width: 15%;
      width: 48%;
      max-width: 48%;
      text-align: center;
      & > .btn-email{
      width: 85%;
      border: none;
      background-color: #FFFF01;
      padding: 7px;
      border-radius: 10px;
      }
      & > .space{
        margin-bottom: 10px;
      }
    }
    & > .create-grup{
      overflow: scroll;
      margin: 20px auto;
      padding: 0;
    }
`
export const InputCont = styled.div`
  max-width: 380px;
  width: 100%;
  height: 55px;
  background-color: #f0f0f0;
  margin: 10px 0;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 100%;
  padding: 0 .4rem;
  & > i{
    text-align: center;
    line-height: 55px;
    color: #AFAFAF;
    font-size: 25px;
  }
  & > input{
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 600;
    font-size: 20px;
    color: #333;
  }
  & > input::placeholder{
    color: #AFAFAF;
    font-weight: 500;
    font-size: 14px;
  }
`
export const InputForm = styled.div`
  max-width: 400px;
  width: 100%;
  height: 55px;
  display: grid;
  grid-template-columns: 40% 60%;
  margin: 10px 0;
  padding: 0 .4rem;
  text-align: start;
  & > h3 {
    display: flex;
    align-items: center;  
    padding: 0 5px;
  }
  & > .div-cont-in{
    display: flex;
    justify-content: space-around;
  }
  & > input[list]{
    margin: 0 auto;
    min-width: 60px;
    max-width: 90%;
    min-height: 40px;
    max-height: 40px;
    padding: 20px 10px;
    border: none;
    border-bottom: 1px solid black;
    color: #666;
  }
  & .react-datepicker-wrapper{
    margin-left: auto;
    max-width: 90% !important;

  }
  & input[type=text]{
    max-width: 90% !important;
  }
  & > div{
    display: flex;
    align-items: center;
    & select{
      margin-left: auto;
      height: 40px;
    }
    & > p{
      margin: 0 auto;
    }
  }
  & .btn-email{
      margin: 0 auto;
      width: 85%;
      border: none;
      background-color: #FFFF01;
      padding: 7px;
      border-radius: 10px;
  }
`
export const CalendarTimer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`
export const BtnForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  & > button{
    width: 75px;
    border: none;
    background-color: #FFFF01;
    padding: 7px;
    border-radius: 10px;
  }
`
export const CheckBox = styled.div`
  max-width: 380px;
  width: 100%;
  height: 55px;
  margin: 0 0 10px 0;
  padding: 0 .4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > label{
    font-size: 14px;
    width: 85%;
  }
`
export const ListaEstudiantes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  & > h2{
    width: 100%;
    margin-bottom: 1rem;
  }
`
export const Table = styled.table`
  border-collapse: collapse;
`
export const Thead = styled.thead`
  background-color: rgba(255, 255, 1, 0.42);
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
  & > tr > th{
    padding: 10px;
    background-color: rgba(255, 255, 1, 0.42);
  }
`
export const Tbody = styled.tbody`
  background-color: white;
  & > tr > td{
    padding: 10px;
  }
  & i{
    cursor: pointer;
    font-size: 30px;
  }
  & .div-table-img{
    display: flex;
  }
  & .btn-email{
      width: 85%;
      border: none;
      background-color: #FFFF01;
      padding: 7px;
      border-radius: 10px;
  }
`
