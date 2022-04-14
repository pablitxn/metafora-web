import { FC, useState } from 'react';
import Whatsapp from 'components/whatsapp-icon';
import Header from 'components/header/desktop';
import Background from 'components/background/orq-futuros';
import MoreInfo from './more-info';
import {
  OrquestandoContainer,
  ContentContainer,
  TitleSection,
  TitleText,
  Content,
  Card,
  Description,
  Text,
  Button,
  Ellipse,
  EllipseText,
} from './styles';

const OrquestandoFuturosContent: FC = () => {
  const [isActive, setIsActive] = useState(false);
  const handleActive = () => setIsActive((prev) => !prev);

  return (
    <ContentContainer>
      <Header />
      <Background />
      <OrquestandoContainer>
        <Content>
          <Card>
            <TitleSection>
              <MoreInfo isActive={isActive} handleClick={handleActive} />
              <TitleText>Compongamos un futuro juntos</TitleText>
            </TitleSection>
            <Description>
              <Text>
                Orquestando Futuros es un espacio orientador y facilitador de la continuidad del
                hacer musical de lxs jóvenes de Orquestas Escuelas. Queremos ser el puente para que
                lxs jóvenes puedan continuar su carrera musical sea esta profesional, sea a través
                de estudios académicos formales (conservatorio o universitarios) o el desarrollo
                musical amateur.
              </Text>
              <Button type="button">Donar</Button>
            </Description>
          </Card>
        </Content>
        <Ellipse>
          <EllipseText>
            <Text notMargin>Mas de </Text>
            <Text notMargin isBolded isBigger>
              1055
            </Text>
            <Text notMargin isBolded>
              jóvenes alcanzados
            </Text>
          </EllipseText>
        </Ellipse>
        <Whatsapp className="whatsapp-icon" />
      </OrquestandoContainer>
    </ContentContainer>
  );
};

export default OrquestandoFuturosContent;
