import { FunctionComponent } from 'react';
import useHomeNavigation from 'hooks/useHomeNavigation';
import Background from 'components/home/background';
import Header from 'components/home/header';
import Navigation from 'components/home/navigation';
import HomeContent from 'components/home/home-content';
import { HomeLayoutContainer } from './styles';

const Home: FunctionComponent = () => {
  const { currentPage, handleNavigation } = useHomeNavigation();

  return (
    <HomeLayoutContainer>
      <Header />
      <Navigation onPageChange={handleNavigation} pageSelected={currentPage} />
      <Background currentPage={currentPage} />
      <HomeContent selected={currentPage} />
    </HomeLayoutContainer>
  );
};

export default Home;
