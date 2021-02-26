import styled from 'styled-components/native';

export const Contenedor = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color:white;
`;

export const Encabezado = styled.View`
  width: 100%;
  height: 25%;
  padding: 50px 30px;
  background-color: #FFFF94;  
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`
export const ConTitle = styled.TouchableOpacity` 
  flex-direction: row;
  justify-content: space-between;
`

export const TextTitle = styled.Text` 
  font-family: 'gadugi';
  font-size: 18px;
  margin-left: 10px
`
export const ContGeneral = styled.View`
  position: absolute;
  padding: 10%;
  top: 15%;
  background-color: white ;
  z-index: 1; 
  height: 85%;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px; 
`
export const ImgContCenter = styled.Image`
  width: 240px;
  height: 240px;
`

export const BotonLog = styled.TouchableOpacity`
  width: 90%;
  padding: 15px 30px;
  margin: 0 auto 15px auto;
  background-color: #FFFF01;
  text-align: center;
  border-radius: 10px;
`

export const TextButton = styled.Text`
  font-family: 'gadugib';
  font-size: 18px;
`

export const TituloGen = styled.Text`
  font-family: 'gadugib';
  font-size: 22px;
  text-align: center;
`

export const TextGen = styled.Text`
  font-family: 'gadugi';
  font-size: 16px;
  text-align: center;
  color: #7A7A7A;
`