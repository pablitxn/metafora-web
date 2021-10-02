import { FunctionComponent } from 'react';
import HomeContent from 'components/home/home-content/mobile';
import { HomeLayoutContainer } from './styles';

const HomeMobile: FunctionComponent = () => {
  return (
    <HomeLayoutContainer>
      {/* <Header/> */}
      <HomeContent />
      {/* <Footer /> */}
    </HomeLayoutContainer>
  );
};

export default HomeMobile;
