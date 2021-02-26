import styled, { keyframes } from 'styled-components';

export const Contenedor = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`
export const ContenedorHeader = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  max-height: 100px;
  padding: 15px 50px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 10;
`

export const ContenedorImagen = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 23%;
  max-width: 250px;
  min-width: 250px;
  & > div{
    width: 70px;
    height: 70px;
    max-width: 70px;
    max-height: 70px;
    background-color: #FFFF01;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > h3{
    font-size: 22px;
  }
`
export const ContenedorUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 240px;
  min-width: 240px;
  & > .text{
    overflow: hidden;
    margin-left: auto;
    text-align: end;
    & > h5{
      font-size: 20px;
    }
    & > p{
      font-size: 18px;
    }
  }
  & > .img-user{
    margin-left: 10px;
    width: 70px;
    height: 70px;
    max-width: 70px;
    max-height: 70px;
    background-color: #FFFF01;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
`
export const ContenedorSideBar = styled.div`
  background-color: yellow;
  position: absolute;
  width: 8%;
  min-height: 100vh;
  max-height: 100vh;
  padding: 40px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 11;
  position: fixed;
  & > div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 320px;
    max-height: 3200px;
  }
  & > div > a {
    display: inline-block;
    padding: 2px;
    border-bottom: 3px none black;
    transition: 0.2s ease-in-out;
  }
  & > div > a > i{
    font-size: 40px;
    color: black;
  }
  & > div > .active{
    border-bottom: 3px solid black;
  }
`
export const ContenedirInfoSelect = styled.div`
  position: absolute;
  width: 92%;
  min-height: 89vh;
  top: 100px;
  right:0;
  background-color: #F0F0F0;
  padding: 15px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`