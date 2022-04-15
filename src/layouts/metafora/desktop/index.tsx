import { FC } from 'react';
import useHomeNavigation from 'hooks/useHomeNavigation';
import Background from 'components/background/metafora';
import Header from 'components/header/desktop';
import Navigation from 'components/navigation';
import HomeContent from './content';
import { HomeLayoutContainer } from './styles';

const Home: FC = () => {
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
