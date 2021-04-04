import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>Pizza</SocialLogo>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/profile.php?id=100005114077647' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/beatsxness/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='https://github.com/beatsxness' target='_blank' aria-label='GitHub'>
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href='https://beatsxness.web.app/'
                target='_blank'
                aria-label='Twitter'
                rel='noopener noreferrer'
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/in/erick-hernandez-93361618b/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;