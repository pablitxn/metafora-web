import { FunctionComponent } from 'react';
import Header from 'components/_shared/header/mobile';
import HomeContent from 'components/home/home-content/mobile';
import { HomeLayoutContainer } from './styles';

const HomeMobile: FunctionComponent = () => {
  return (
    <HomeLayoutContainer>
      <Header />
      <HomeContent />
    </HomeLayoutContainer>
  );
};

export default HomeMobile;
