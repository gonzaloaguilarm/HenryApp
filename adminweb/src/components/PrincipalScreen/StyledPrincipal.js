import styled, { keyframes } from 'styled-components'

export const Contenedor = styled.div`
  background-color: #fff;
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  &::before{
    content: '';
    position: absolute;
    width: 2000px;
    height: 2000px;
    border-radius: 50%;
    background-color: #FFFF01;
    top: 30%;
    right: 45%;
    transform: translateY(-60%);
    z-index: 6;
    transition: 1.8s ease-in-out;
  }
  &.registerMode::before{
    transform: translate(100%, -50%);
    right: 52%;
  }
`
export const FormuContenedor = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`
export const ContenedorInFormu = styled.div`
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
  width: 50%;
  display: grid;
  grid-template-columns: 1fr;
  z-index:5;
  transition: 1s 0.7s ease-in-out;
`
const Formulario = styled.form`
  padding: 0 2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  transition: 0.2s 0.7s ease-in-out;
`
export const FormularioLog = styled(Formulario)`
  z-index: 2;
`
export const FormularioRegister = styled(Formulario)`
  z-index: 1;
  opacity: 0;
`
export const Title = styled.h2`
  font-size: 30px;
  color: black;
  margin-bottom: 10px;
`
export const InputCont = styled.h2`
  max-width: 380px;
  width: 100%;
  height: 55px;
  background-color: #f0f0f0;
  margin: 10px 0;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 15% 85%;
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
  }
`
export const Btn = styled.input`
  width: 150px;
  height: 49px;
  border: none;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: #FFFF01;
  font-weight: 600;
  margin: 10px 0;
  transition: .5s;
  &:hover{
    background-color: #EBEB00;
  }
`
export const TextoSocial = styled.p`
  padding: .7rem 0;
  font-size: 16px;
`
export const ContSocialMedia = styled.div`
  display: flex;
  justify-content: center;
  & > a{
    height: 50px;
    width: 50px;
    border: 1px solid #707070;
    margin: 0 .45rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    color: #707070;
    transition: .3s;
  }
  & > a:hover{
    color: #ffff01;
    border-color: #ffff01;
  }
`

/* panel content info  */

export const ContenedorPanel = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr)
`
const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  z-index: 7;
`
export const PanelLeft = styled(Panel)`
  pointer-events: all;
  padding: 3rem 17% 2rem 12%;

`
export const PanelRight = styled(Panel)`
  pointer-events: none;
  padding: 3rem 12% 2rem 17%; 
  & > div,
  & > img{
    transform: translateX(800px)
  }
`
export const InContentPanel = styled.div`
  transition: .9s .6s ease-in-out;
  & > h2{
    font-weight: 600;
    line-height: 3;
    font-size: 35px;
  }
  & > p{
    font-size: 20px;
    padding: .7rem 0;
  }
  & > button{
    width: 150px;
    height: 49px;
    border: none;
    outline: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: #FFFFFF;
    font-weight: 600;
    margin: 10px 0;
    transition: .5s;
    &:hover{
      background-color: #F0F0F0;
    }
  }
`
export const ImgPanel = styled.img`
  width: 100%;
  transition: 1.1s .4s ease-in-out;
`

