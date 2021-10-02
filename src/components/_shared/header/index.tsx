import { FunctionComponent } from 'react';
import { Instagram, Facebook, Mail } from 'react-feather';
import Navigation from 'components/_shared/navigation-anchor';
import {
  HeaderContainer,
  HeaderImage,
  NavigationContainer,
  Divider,
  SocialMediaContainer,
} from './styles';

const Header: FunctionComponent = () => {
  return (
    <HeaderContainer>
      <HeaderImage src="/logos/transparent_color-full-size.png" alt="Logo de fundacion metáfora" />
      <NavigationContainer>
        <Navigation href="/orquestando-futuros">Orquestando Futuros</Navigation>
        <Divider />
        <SocialMediaContainer>
          <Instagram />
          <Facebook />
          <Mail />
        </SocialMediaContainer>
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default Header;
