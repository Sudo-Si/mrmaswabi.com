import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { proj, projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
   <SectionDivider/>
      <SectionTitle main > Projects</SectionTitle> 
      <GridContainer>
        {projects.map(({id, image, title, description, tags, source,progress, visit})=>
        <BlogCard key ={id}> 
          
          <Img src={image} alt=""/> 
          <TitleContent>
            <HeaderThree title>  {title}</HeaderThree>
            <Hr />
            </TitleContent>
            <CardInfo>{description}<br/></CardInfo>
            <HeaderThree>Progress:</HeaderThree>
            <HeaderThree>{progress}</HeaderThree>
            <TitleContent>Stack</TitleContent>
            <TagList>
             {tags.map((tag, i)=>(
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
         <UtilityList>

          <ExternalLinks href={visit}>Visit

          </ExternalLinks>
          <ExternalLinks href={source}>Source

          </ExternalLinks>
         </UtilityList>
         
        </BlogCard>
        )}
      </GridContainer>
     
  </Section>
);

export default Projects;