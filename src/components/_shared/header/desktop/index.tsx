import { FunctionComponent } from 'react';
import { Instagram, Facebook, Mail } from 'react-feather';
import { useRouter } from 'next/router';
import Navigation from 'components/_shared/navigation-anchor';
import { HOME_PATH, ORQ_FUTUROS_PATH, INSTAGRAM_URL } from './constants';
import {
  HeaderContainer,
  Logo,
  NavigationContainer,
  Divider,
  SocialMediaContainer,
  Anchor,
} from './styles';

const Header: FunctionComponent = () => {
  const { pathname } = useRouter();

  return (
    <HeaderContainer>
      {pathname === HOME_PATH && (
        <>
          <Logo src="/logos/fmetafora.png" alt="Logo de Fundación Metáfora" className="metafora" />
          <NavigationContainer>
            <Navigation href="/orquestando-futuros">Orquestando Futuros</Navigation>
            <Divider />
            <SocialMediaContainer>
              <Anchor href={INSTAGRAM_URL}>
                <Instagram />
              </Anchor>
              <Anchor>
                <Facebook />
              </Anchor>
              <Anchor>
                <Mail />
              </Anchor>
            </SocialMediaContainer>
          </NavigationContainer>
        </>
      )}

      {pathname === ORQ_FUTUROS_PATH && (
        <>
          <Logo
            src="/logos/orq-futuros.png"
            alt="Logo de Orquestando Futuros"
            className="orq-futuros"
          />
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
