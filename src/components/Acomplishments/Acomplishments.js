import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Box2, Boxes, BoxNum, BoxText , BoxTit} from './AcomplishmentsStyles';

const data = [
  { number: 3, text: 'Web Application Deployes ', },
  { number: 20, text: '3d Designs', },
  { number: 50, text: '3d Models Painted ', },
  { number: 500, text: '3d Prints', },

];
const data2 = [
  { level: 5, title:" Diploma", text:'Information Technology Technical Support'},
  { level: 6, title:"Diploma", text:'Software Development'},

];

const Acomplishments = () => (
  <Section>
    <SectionDivider/> 
    <br/>
    <SectionTitle > Accomplishments </SectionTitle>
        {data2.map((card, index)=>(
      <Box2 key={index}>
        <BoxTit> Level {card.level} {card.title} in {card.text}</BoxTit>

      </Box2>    
  ))}
  <Boxes>  
     {data.map((card, index)=>(
      <Box key={index}>
        <BoxNum>{card.number}+</BoxNum>
        <BoxText >
        {card.text}
        </BoxText>
      </Box>
  ))}

      </Boxes>
   
      
  <Boxes>   
   
      
      </Boxes>
      
  </Section>
);

export default Acomplishments;
