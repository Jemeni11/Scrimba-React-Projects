import styled from "styled-components"
import ImageHeader from "./components/ImageHeader"
import image from '../Profile.png'
import MainContent from "./components/MainContent"
import SocialFooter from "./components/SocialFooter"

const AppContainer = styled.div`
  font-family: 'Roboto', 'Ubuntu Mono', sans-serif;
  margin: auto;
  border-radius: 5px;
  background-color: #1A1B21;
  display: grid;
  grid-template-rows: 0.35fr 1fr 0.2fr;
  grid-template-columns: 1fr;
  grid-template-areas: 
    "."
    "."
    ".";

  @media (min-width: 768px){
    height: 95vh;
    width: 25vw;
  }

  @media (max-width: 768px){
    height: 90vh;
    width: 70vw;
  }
`

function App() {

  return (
    <AppContainer>
      <ImageHeader imgsrc={image}/>
      <MainContent />
      <SocialFooter />
    </AppContainer>
  )
}

export default App
