import styled from 'styled-components/native';

export const Contenedor = styled.View `
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
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

export const ConTitle = styled.TouchableOpacity `
  flex-direction: row;
  justify-content: space-between;
`

export const TextTitle = styled.Text `
  font-family: 'gadugi';
  font-size: 18px;
  margin-left: 10px;
`
export const Options = styled.View `
  width: 85%;
  height: 120px;
  position: absolute;
  top: 15%;
  flex-direction: row;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #F5F5F5;
  z-index: 5;
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
  width: 120px;
  height: 120px;
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
  width: 80%;
  height: 65%;
  z-index: 2;
  background-color: #FFF;
  align-items: center;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`

export const ContMinf = styled.View `
  padding: 0 30px;
  margin-top: auto;
`