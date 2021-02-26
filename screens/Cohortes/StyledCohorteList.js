import styled from 'styled-components/native';

export const ImgSise = styled.Image`
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
  background-color: white;
  align-items: center;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px; 
`
export const ContListGen = styled.ScrollView`
  width: 80%;
  max-width: 80%;
  margin: 0;
  padding: 0;
  margin-top: 25%;
`

/* Boddy Listas */


export const BodyUnitItem = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const TextPrin = styled.Text`
  font-family: 'gadugib';
  font-size: 14px;
`

/* Contenido table Cohorte */

export const ContPirnTable = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const GridTable = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const TextContTable = styled.Text`
  font-family: 'gadugib';
  font-size: 14px;
  width: 50%;
  max-width: 50%;
`


/* Botones */

export const ContBtnOut = styled.View`
  flex-direction: row;
  justify-content: space-between
`

export const BotonLog = styled.TouchableOpacity`
  margin-top: 10px;
  padding: 3px 15px; 
  background-color: #FFFF01;
  align-items: center;
  border-radius: 10px;
  min-height: 35px;
  max-height: 35px;
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

export const ContBtnLog = styled.View`
  margin: 20px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const BackInOut = styled.View`
  position: absolute;
  background-color: rgba(0,0,0, .2);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`
export const BackInIn = styled.View`
  width: 85%;
  min-height: 50%;
  max-height: 70%;
  background-color: white;
  border-radius: 8px;
  padding: 30px;
`
export const ListAdd = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const ContTextList = styled.View`
  width: 50%;
  max-width: 50%;
`
export const ListText = styled.Text`
  font-family: 'gadugib';
  font-size: 14px;
`