import { FunctionComponent, useState } from 'react';
import Whatsapp from '../../_shared/whatsapp-icon';
import {
  OrquestandoContainer,
  Title,
  TitleText,
  Content,
  Description,
  Text,
  Button,
  Ellipse,
  EllipseText,
} from './styles';
import MoreInfo from './more-info';

const OrquestandoFuturosContent: FunctionComponent = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => setIsActive((prev) => !prev);

  return (
    <OrquestandoContainer>
      <Content>
        <Title>
          <MoreInfo isActive={isActive} handleClick={handleClick} />
          <TitleText>Compongamos un futuro juntos</TitleText>
        </Title>
        <Description>
          <Text>
            Orquestando Futuros es un espacio orientador y facilitador de la continuidad del hacer
            musical de lxs jóvenes de Orquestas Escuelas. Queremos ser el puente para que lxs
            jóvenes puedan continuar su carrera musical sea esta profesional, sea a través de
            estudios académicos formales (conservatorio o universitarios) o el desarrollo musical
            amateur.
            <br /> <br />
          </Text>
          <Text isBolded>
            puedes ayudarnos desde una mínima donación.
            <br /> <br />
          </Text>
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
  );
};

export default OrquestandoFuturosContent;
