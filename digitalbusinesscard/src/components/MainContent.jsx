import { Button, LinkContainer, MainContainer, SectionParagraph, SectionTitle, Subtitle, Title, Website, Section } from "./styles"

export default function MainContent() {
  
  return(
    <MainContainer>
      <Title>Laura Smith</Title>
      <Subtitle>Frontend Developer</Subtitle>
      <Website>laurasmith.website</Website>
      <LinkContainer>
        <Button>Email</Button>
        <Button bgcolor="#5093E2">LinkedIn</Button>
      </LinkContainer>
      <Section>
        <SectionTitle>About</SectionTitle>
        <SectionParagraph>I am a frontend developer with a particular interest in
          making things simple and automating daily tasks. I try to
          keep up with security and best practices, and I'm always 
          looking for new things to learn.
        </SectionParagraph>
        <SectionTitle>Interests</SectionTitle>
        <SectionParagraph>Food expert. Music scholar. Reader. Internet fanatic.
          Bacon buff. Entrepreneur. Travel geek. Pop culture ninja.
          Coffee fanatic.
        </SectionParagraph>
      </Section>
    </MainContainer>
  )
};
