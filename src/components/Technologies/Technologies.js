import React from 'react';
import { DiCode, DiCss3, DiExtjs, DiFirebase, DiGit, DiGithub, DiHtml5, DiJavascript, DiMongodb, DiNodejs, DiNpm, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, ImgWrapper } from './TechnologiesStyles';
const Technologies = () =>  (
  <Section id ="tech">
  <SectionDivider/>
  <br/>
  <SectionTitle>Technologies</SectionTitle>
  <SectionText> I've been working with a range of technologies from front end to backend</SectionText>
  <List>   <ListItem>
      <ImgWrapper>
    <DiNodejs size="5rem"/>
      <DiReact size="5rem"/>
      <DiMongodb size="5rem"/>
      <DiCode size="5rem"/>
      
      </ImgWrapper>
      <ListContainer>
        <ListTitle>Full-Stack </ListTitle>
        <ListParagraph> Experience with <br/>
       Mern Stack, JAM Stack</ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <ImgWrapper> 
      <DiReact size="5rem"/>
   
      </ImgWrapper>
     
      <ListContainer>
        <ListTitle>Front-End </ListTitle>
        <ListParagraph> Experience with <br/>
        React.js, CSS, HTML, Javascript, Next.js</ListParagraph>
      </ListContainer>
    </ListItem>
    
    <ListItem>
    <ImgWrapper> 
    <DiNpm size="5rem"/>
      </ImgWrapper>
      <ListContainer>
        <ListTitle>Back-End </ListTitle>
        <ListParagraph> Experience with <br/>
        Node.js, and Databases, setting up schemas and APIs </ListParagraph>
      </ListContainer>
    </ListItem>
 
  <ListItem>
      <ImgWrapper> 
      <DiGithub size="5rem"/>
     
      </ImgWrapper>
     
      <ListContainer>
        <ListTitle>Version Control </ListTitle>
        <ListParagraph> Experience with <br/>
       Git & GitHub</ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  </Section>

);

export default Technologies;
