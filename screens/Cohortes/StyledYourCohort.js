import styled from 'styled-components/native';

export const Contenedor = styled.View `
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`

export const Encabezado = styled.View `
  width: 100%;
  height: 25%;
  padding: 50px 30px;
  background-color: #FFFF94;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

export const Home = styled.TouchableOpacity `
  flex-direction: row;
  justify-content: space-between
`

export const TextTitle = styled.Text `
  font-family: 'gadugi';
  font-size: 18px;
  margin-left: 10px
`

export const Options = styled.View `
  width: 85%;
  height: 120px;
  position: absolute;
  justify-content: space-between;
  top: 15%;
  flex-direction: row;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px; 
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px; 
  background-color: #F5F5F5;
  z-index: 100;
`

export const BackImg = styled.View `
  width: 100px;
  background-color: #FFFF01;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  justify-content: center;
  align-items: center;
`

export const ImgSize = styled.Image `
  width: 90px;
  height: 90px
`

export const ContText = styled.View `
  padding: 10px;
  width: 70%;
`

export const TituloCard = styled.Text `
  margin: 10px 0;
  font-family: 'gadugib';
  font-size: 14px;
`

export const ContGeneral = styled.View `
  position: absolute;
  top: 20%;
  width: 100%;
  height: 70%;
  background-color: white;
  align-items: center;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`
export const ContListGen = styled.ScrollView`
  width: 80%;
  max-width: 80%;
  margin-top: 25%;
`

export const Cohorte = styled.Text `
  margin-top: 90px;
  font-family: 'gadugib';
  font-size: 20px;
  font-weight: 900
`

export const GroupCard = styled.View `
  width: 90%;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;
`

export const Tarjeta = styled.View `
  margin: 0 auto;
  width: 45%;
  height: 120px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

export const Titulo = styled.View `
  width: 100%;
  height: 30%;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #FFFF01;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const Img = styled.View `
  background-color: #F5F5F5;
  width: 100%;
  height: 70%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  justify-content: center;
  align-items: center;
`

export const Imagen = styled.Image `
  width: 50px;
  height: 50px;
`

export const User = styled.Image `
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
`

export const Pm = styled.View `
  margin: 20px auto;
  width: 90%;
  height: 120px;
  flex-direction: column;
`

export const Progreso = styled.View `
  width: 90%;
  margin: 0 auto 20px auto;
  height: 150px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TarjetaProgreso = styled.View `
  width: 100%;
  height: 25%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TituloPm = styled.View `
  width: 100%;
  height: 30%;
  flex: 1;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: #FFFF01;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`