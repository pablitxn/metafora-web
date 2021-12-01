import { FunctionComponent } from 'react';
import Header from 'components/_shared/header/desktop';
import Footer from 'components/_shared/footer/desktop';
import MoreInfo from './more-info';
import {
  ContentContainer,
  TitleText,
  Content,
  Description,
  Text,
  TextBolded,
  Box,
  Button,
} from './styles';

const OrquestandoFuturosContent: FunctionComponent = () => {
  return (
    <Box>
      <ContentContainer>
        <Header />
        <Content>
          <Description>
            <TitleText>Compongamos un futuro juntos</TitleText>
            <Text>
              Orquestando Futuros es un espacio orientador y facilitador de la continuidad del hacer
              musical de lxs jóvenes de Orquestas Escuelas. Queremos ser el puente para que lxs
              jóvenes puedan continuar su carrera musical sea esta profesional, sea a través de
              estudios académicos formales (conservatorio o universitarios) o el desarrollo musical
              amateur.
            </Text>
            <TextBolded>puedes ayudarnos desde una mínima donación.</TextBolded>
            <Button type="button">Donar</Button>
          </Description>
        </Content>
      </ContentContainer>
      <ContentContainer>
        <MoreInfo />
        <Footer />
      </ContentContainer>
    </Box>
  );
};

export default OrquestandoFuturosContent;
