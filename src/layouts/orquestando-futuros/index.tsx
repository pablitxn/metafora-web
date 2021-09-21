import { FunctionComponent } from 'react';
import Header from 'components/orquestando-futuros/header';
import Background from 'components/orquestando-futuros/background';
import OrquestandoFuturosContent from 'components/orquestando-futuros/orquestando-futuros-content';
import { OrquestandoContainer } from './styles';

const OrquestandoFuturosLayout: FunctionComponent = () => {
  return (
    <OrquestandoContainer>
      <Header />
      <Background />
      <OrquestandoFuturosContent />
    </OrquestandoContainer>
  );
};

export default OrquestandoFuturosLayout;
