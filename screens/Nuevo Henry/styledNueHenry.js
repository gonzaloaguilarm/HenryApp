import styled from 'styled-components/native';

export const ImgSise = styled.Image`
  width: 90px;
  height: 90px;
`

export const LogoSise = styled.Image`
  width: 40px;
  height: 40px;
`

export const Contenedor = styled.View`
  flex: 1;
  align-items: center;
  background-color:white;
`;

export const Encabezado = styled.View`
  width: 100%;
  height: 25%;
  padding: 50px 30px;
  background-color: #FFFF94;  
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px; 
  z-index: 1; 
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

export const Options = styled.TouchableOpacity`
  width: 85%;
  height: 120px;
  position: absolute;
  top: 15%;
  flex-direction: row;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px; 
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px; 
  background-color: #EBEBEB;
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

/* Body Content */

export const BodyCont = styled.ScrollView `
  width: 85%;
  flex: 1;
  margin-top: 20%;
`

export const TitleBody = styled.Text `
font-family: 'gadugib';
font-size: 22px;
`

export const ContList = styled.View `
  width: 100%
`

export const TextContList = styled.Text `
  font-family: 'gadugi';
  font-size: 20px;
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

/* Menu inferior */
export const ContMinf = styled.View`
  padding: 0 30px;  
  width: 100%;
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