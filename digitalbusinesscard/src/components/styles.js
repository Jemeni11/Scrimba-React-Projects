import styled from "styled-components"

export const MainContainer = styled.main`
  padding: 0 25px;
  display: grid; 
  // grid-template-rows: 0.25fr 0.15fr 0.1fr 0.3fr 0.35fr;
  grid-template-rows: 10% 15% 10% 30% 35%;
  grid-template-areas: 
  "title"
  "subtitle"
  "website"
  "linkcontainer"
  "section"
  outline: 0.5px dotted red;
`
export const Title = styled.h1`
  color: white; 
  margin: 0px;
  padding-top: 15px;
  text-align: center;
`
export const Subtitle = styled.h5`
  color: #C49C7F;
  margin: 0px;
  padding-top: 3px; 
  text-align: center;
`
export const Website = styled.h6`
  color: white;
  margin: 0px;
  text-align: center;
  padding: 10px 0;
`
export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0px;
  text-align: center;

  // outline: 0.5px dotted red;
`
export const Button = styled.button`
  width: 45%;
  height: 40px;
  background-color: ${props => props.bgcolor ? props.bgcolor : 'white'};
  border-color: ${props => props.bgcolor ? props.bgcolor : 'white'};
  color: ${props => props.bgcolor ? 'white' : 'black'};
  border-radius: 5px;
`
export const Section = styled.section`
  display: grid;
  grid-template-rows: 0.3fr 0.5fr 0.3fr 0.5fr
  grid-template-areas:
    "sectiontitle1"
    "sectionparagraph1"
    "sectiontitle2"
    "sectionparagraph2";
`
export const SectionTitle = styled.h3`
  color: #F5F5F5;
  margin: 20px 0 0 0;
  padding-bottom: 5px;
`
export const SectionParagraph = styled.p`
  color: #A8A9AA;
  margin: 0px;
`
export const FooterContainer = styled.footer`
  margin: auto;
  background-color: #161619;
  margin: 0px;
`
export const LinkList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0px;
`
export const LinkItem = styled.li`
  padding: 0 5px;
`