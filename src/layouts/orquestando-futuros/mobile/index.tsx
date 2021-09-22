import { FunctionComponent } from 'react';
import useHomeNavigation from 'hooks/useHomeNavigation';
// import Header from 'components/orquestando-futuros/mobile/header';
// import Footer from 'components/orquestando-futuros/mobile/navigation';
import HomeContent from 'components/home/home-content';
import {
  OrqFuturosLayoutMobile,
  TitlePage,
  Card,
  CardContainerOrange,
  CardContainerBlack,
  Title,
  Subtitle,
  Text,
  Button,
} from './styles';

const Home: FunctionComponent = () => {
  const { currentPage, handleNavigation } = useHomeNavigation();

  return (
    <OrqFuturosLayoutMobile>
      {/*<Header>*/}
      <TitlePage>Compongamos un futuro juntos</TitlePage>
      <Card>
        <CardContainerOrange>
          <Title>Nosotros</Title>
          <Text>
            Orquestando Futuros es un espacio orientador y facilitador de la continuidad del hacer
            musical de lxs jóvenes de Orquestas Escuelas. Queremos ser el puente para que lxs
            jóvenes puedan continuar su carrera musical sea esta profesional, sea a través de
            estudios académicos formales (conservatorio o universitarios) o el desarrollo musical
            amateur.
          </Text>
        </CardContainerOrange>
        <CardContainerBlack>
          <Title>¿Como puedo ayudar?</Title>
          <Text>
            Puedes alcanzandonos alguno de los materiales y/o instrumentos que estamos buscando.
            Para saber cuales son contactarte con nosotros.
          </Text>
          <Subtitle>No tengo elementos</Subtitle>
          <Title>¿puedo ayudar de otra forma?</Title>
          <Text>Tambien puedes ayudarnos desde una mínima donación.</Text>
          <Button>Donar</Button>
        </CardContainerBlack>
      </Card>
      <footer>
        <text>info@metafora.org.ar</text>
      </footer>
    </OrqFuturosLayoutMobile>
  );
};

export default Home;
