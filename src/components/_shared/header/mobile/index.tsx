import { FunctionComponent } from 'react';
import Navigation from 'components/_shared/navigation-anchor';
import useHeaderMobile from './hooks';
import { HeaderContainer, HeaderLogo, NavigationContainer } from './styles';

const HeaderMobile: FunctionComponent = () => {
  const { pageActive } = useHeaderMobile();

  return (
    <HeaderContainer>
      <NavigationContainer>
        <Navigation href="/">
          <HeaderLogo
            isActive={pageActive.home}
            src="/logos/fmetafora.png"
            alt="Logo de Fundación Metáfora"
            className="metafora"
          />
        </Navigation>
        <Navigation href="/orquestando-futuros">
          <HeaderLogo
            isActive={pageActive.orqFuturos}
            src="/logos/orquestando-1.png"
            alt="Logo de Orquestando Futuros"
            className="orq-futuros"
          />
        </Navigation>
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default HeaderMobile;
