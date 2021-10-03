import React, { FunctionComponent } from 'react';
import { Instagram, Facebook, Mail } from 'react-feather';
import { FooterContainer, Text, SocialMediaContainer, Anchor } from './styles';

const FooterMobile: FunctionComponent = () => {
  return (
    <FooterContainer>
      <Text>info@metafora.org.ar</Text>

      <SocialMediaContainer>
        <Anchor>
          <Instagram />
        </Anchor>
        <Anchor>
          <Facebook />
        </Anchor>
        <Anchor>
          <Mail />
        </Anchor>
      </SocialMediaContainer>
    </FooterContainer>
  );
};

export default FooterMobile;
