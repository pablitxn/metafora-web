import { FC } from 'react';
import Header from 'components/header/mobile';
import Footer from 'components/footer';
import {
  OrqFuturosLayoutMobile,
  HeroContainer,
  TitlePage,
  CardContainer,
  CardOrange,
  CardBlack,
  Title,
  Subtitle,
  Text,
  Button,
} from './styles';

const Home: FC = () => {
  return (
    <OrqFuturosLayoutMobile>
      <Header />
      <HeroContainer>
        <TitlePage>Compongamos un futuro juntos</TitlePage>
      </HeroContainer>
      <CardContainer>
        <CardOrange>
          <Title>Nosotros</Title>
          <Text>
            Orquestando Futuros es un espacio orientador y facilitador de la continuidad del hacer
            musical de lxs jóvenes de Orquestas Escuelas. Queremos ser el puente para que lxs
            jóvenes puedan continuar su carrera musical sea esta profesional, sea a través de
            estudios académicos formales (conservatorio o universitarios) o el desarrollo musical
            amateur.
          </Text>
        </CardOrange>
        <CardBlack>
          <Title>¿Cómo puedo ayudar?</Title>
          <Text>
            Puedes alcanzandonos alguno de los materiales y/o instrumentos que estamos buscando.
            Para saber cuales son contactarte con nosotros.
          </Text>
          <Subtitle>No tengo elementos</Subtitle>
          <Title>¿puedo ayudar de otra forma?</Title>
          <Text>Tambien puedes ayudarnos desde una mínima donación.</Text>
          <Button type="button">
            <a
              href="https://donaronline.org/fundacion-metafora/campana-de-donacion-orquestando-futuros"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donar
            </a>
          </Button>
        </CardBlack>
      </CardContainer>
      <Footer />
    </OrqFuturosLayoutMobile>
  );
};

export default Home;
