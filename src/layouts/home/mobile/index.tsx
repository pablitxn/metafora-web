import { FunctionComponent } from 'react';
import Header from 'components/_shared/header/mobile';
import Footer from 'components/_shared/footer/mobile';
import HomeContent from 'components/home/home-content/mobile';
import { HomeLayoutContainer } from './styles';

const HomeMobile: FunctionComponent = () => {
  return (
    <HomeLayoutContainer>
      <Header />
      <HomeContent />
      <Footer />
    </HomeLayoutContainer>
  );
};

export default HomeMobile;
