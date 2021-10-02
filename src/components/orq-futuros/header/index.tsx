import { FunctionComponent } from 'react';
import { Instagram, Mail } from 'react-feather';
import Navigation from 'components/_shared/navigation-anchor';
import {
  HeaderContainer,
  Logo,
  NavigationContainer,
  Divider,
  SocialMediaContainer,
} from './styles';

const Header: FunctionComponent = () => {
  return (
    <HeaderContainer>
      <Logo src="/logos/orquestando-1.png" alt="logo de orquestando futuros" />
      <NavigationContainer>
        <Navigation href="/">Fundacion Metafora</Navigation>
        <Divider />
        <SocialMediaContainer>
          <Instagram />
          <Mail />
        </SocialMediaContainer>
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default Header;
