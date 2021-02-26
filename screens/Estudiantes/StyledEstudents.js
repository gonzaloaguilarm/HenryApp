import styled from 'styled-components/native';

export const ImgSize = styled.Image`
  width: 90px;
  height: 90px;
`

export const LogoSise = styled.Image`
  width: 40px;
  height: 40px;
`

export const ImgListUn = styled.Image`
  width: 80px;
  height: 60px;
`

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
export const Options = styled.View`
  width: 85%;
  height: 120px;
  position: absolute;
  top: 15%;
  flex-direction: row;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px; 
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px; 
  background-color: #F5F5F5;
  z-index: 5;
`

export const BackImg = styled.View`
  width: 100px;
  background-color: #FFFF01;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  justify-content: center;
  align-items: center;
`

export const ContText = styled.View`
  padding: 10px;
  width: 70%;
`

export const TituloCard = styled.Text`
margin: 10px 0;
font-family: 'gadugib';
font-size: 14px;
`

export const ContGeneral = styled.View`
  position: absolute;
  top: 20%;
  width: 100%;
  height: 70%;
  z-index: 2; 
  align-items: center;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px; 
`
export const ContListGen = styled.ScrollView`
  width: 80%;
  max-width: 80%;
  margin-top: 25%;
`

/* Boddy Listas */


export const BodyUnitItem = styled.View`
  flex:1;
  flex-direction: row;
  width: 120%;
`

export const TextPrin = styled.Text`
  font-family: 'gadugib';
  font-size: 14px;
`

/* Contenido table Cohorte */

export const ContPirnTable = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

export const TextContTable = styled.Text`
  font-family: 'gadugib';
  font-size: 14px;
`

/* Botones */

export const ContBtnOut = styled.View`
  flex-direction: row;
  justify-content: space-between
`

export const BotonLog = styled.TouchableOpacity`
  padding: 3px 15px; 
  background-color: #FFFF01;
  align-items: center;
  border-radius: 10px;
`

export const TextButton = styled.Text`
  font-family: 'gadugib';
  font-size: 18px;
`

export const TextButtonOp2 = styled.Text`
  font-family: 'gadugi';
  font-size: 15px;
`


/* Menu inferior */
export const ContMinf = styled.View`
  padding: 0 30px;  
  margin: auto 0 30px 0;
  width: 100%;
  z-index: 2; 
`

export const IconContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`

export const ImgMinf = styled.View`
  width: 70px;
  height: 70px;
  background-color: #FFFF01;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  justify-content: center;
  align-items: center;
`

