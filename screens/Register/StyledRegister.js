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

export const ImgContCenter = styled.Image`
  width: 240px;
  height: 240px;
`

export const ContGeneral = styled.View`
  position: absolute;
  padding: 10%;
  top: 15%;
  background-color: white ;
  z-index: 1; 
  height: 85%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px; 
`

export const TituloGen = styled.Text`
  font-family: 'gadugib';
  font-size: 25px;
  text-align: center;
`

export const TextGen = styled.Text`
  font-family: 'gadugi';
  font-size: 15px;
  text-align: center;
  color: #7A7A7A;
`

export const ContsInputs = styled.View`
  height: 65%;
  width: 100%;
  padding: 10% 0 0 0;
`

export const ContsFormIn = styled.View`
  height: 90%;
  width: 100%;
  padding: 10% 0 0 0;
`

export const ScrollInView = styled.ScrollView`
  height: 90%;
  width: 100%;
`

export const InputsIndv = styled.View`
  height: 10%;
  border-bottom-width: 1px;
  border-bottom-color: #707070;
  margin-bottom: 7%;
`

export const BotonLog = styled.TouchableOpacity`
  width: 90%;
  padding: 15px 30px;
  margin: auto auto 0 auto;
  background-color: #FFFF01;
  text-align: center;
  border-radius: 10px;
`

export const TextButton = styled.Text`
  font-family: 'gadugib';
  font-size: 18px;
  text-align: center;
`