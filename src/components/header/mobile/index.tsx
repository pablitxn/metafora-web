import { FC } from 'react';
import Navigation from 'components/navigation-anchor';
import useHeaderMobile from './hooks';
import { HeaderContainer, HeaderLogo, NavigationContainer } from './styles';

const HeaderMobile: FC = () => {
  const { pageActive } = useHeaderMobile();
  const { home, orqFuturos } = pageActive;

  return (
    <HeaderContainer>
      <NavigationContainer>
        <Navigation href="/">
          <HeaderLogo
            src={home ? '/logos/fmetafora-white.png' : '/logos/fmetafora-gray.png'}
            alt="Logo de Fundación Metáfora"
          />
        </Navigation>
        <Navigation href="/orquestando-futuros">
          <HeaderLogo
            src={orqFuturos ? '/logos/orq-futuros-white.png' : '/logos/orq-futuros-gray.png'}
            alt="Logo de Orquestando Futuros"
          />
        </Navigation>
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default HeaderMobile;
