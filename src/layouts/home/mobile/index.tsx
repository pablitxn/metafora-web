import { FunctionComponent } from 'react';
import HomeContent from 'components/home/mobile/home-content';
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
