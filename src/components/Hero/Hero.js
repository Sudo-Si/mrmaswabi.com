import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding>
<LeftSection>
  <title>MrMaswabi.com</title>
  <SectionTitle main center>
    Welcome to<br/>  My Portfolio
  </SectionTitle>
  <SectionText>
    My name is Simon Maswabi.<br/> Thanks for stopping by...<br/>
    I am a Software Development Graduate & an aspiring fullstack developer 
  </SectionText>
  {/* //call to action maybe  */}
  <Button onClick={()=> window.location ="https://sudo-si.github.io/my-cv2.html"}> View My CV</Button>
</LeftSection>
</Section>
);
export default Hero;