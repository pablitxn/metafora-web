import { FunctionComponent, useState } from 'react';
import Whatsapp from 'components/_shared/whatsapp-icon';
import Header from 'components/_shared/header/desktop';
import Background from 'components/orq-futuros/background';
import MoreInfo from './more-info';
import {
  OrquestandoContainer,
  ContentContainer,
  Title,
  TitleText,
  Content,
  Description,
  Text,
  Button,
  Ellipse,
  EllipseText,
} from './styles';

const OrquestandoFuturosContent: FunctionComponent = () => {
  const [isActive, setIsActive] = useState(false);
  const handleActive = () => setIsActive((prev) => !prev);

  return (
    <ContentContainer>
      <Header />
      <Background />
      <OrquestandoContainer>
        <Content>
          <Title>
            <MoreInfo isActive={isActive} handleClick={handleActive} />
            <TitleText>Compongamos un futuro juntos</TitleText>
          </Title>
          <Description>
            <Text>
              Orquestando Futuros es un espacio orientador y facilitador de la continuidad del hacer
              musical de lxs jóvenes de Orquestas Escuelas. Queremos ser el puente para que lxs
              jóvenes puedan continuar su carrera musical sea esta profesional, sea a través de
              estudios académicos formales (conservatorio o universitarios) o el desarrollo musical
              amateur.
            </Text>
            <Text isBolded>puedes ayudarnos desde una mínima donación.</Text>
            <Button type="button">Donar</Button>
          </Description>
        </Content>
        <Ellipse>
          <EllipseText>
            <Text>Mas de </Text>
            <Text isBolded isBigger>
              350
            </Text>
            <Text isBolded>voluntarios </Text>
          </EllipseText>
        </Ellipse>
        <Whatsapp className="whatsapp-icon" />
      </OrquestandoContainer>
    </ContentContainer>
  );
};

export default OrquestandoFuturosContent;
