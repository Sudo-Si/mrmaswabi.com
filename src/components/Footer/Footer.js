import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
     <LinkList>
     <LinkColumn>
     <LinkTitle> Call:</LinkTitle>
     <LinkItem href='tel:+6421307000'> +6421307000</LinkItem>
     </LinkColumn>
     <LinkColumn>
     <LinkTitle> EMAIL:</LinkTitle>
     <LinkItem href='mailto:simon@mrmaswabi.com'> simon@mrmaswabi.com </LinkItem>
     </LinkColumn>
     </LinkList>
      <SocialIconsContainer>
      <CompanyContainer>
        <Slogan> a website developed by Simon Dalgleish-Maswabi</Slogan>
      </CompanyContainer>
     <SocialContainer><SocialIcons href='https://github.com/Sudo-Si'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/simon-dalgleish-maswabi/'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.instagram.com/thosedudes_3d/'>
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
      </SocialContainer>
        </SocialIconsContainer>
     
    </FooterWrapper>
  );
};

export default Footer;

