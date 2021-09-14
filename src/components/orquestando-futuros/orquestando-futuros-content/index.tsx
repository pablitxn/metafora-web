import { FunctionComponent } from 'react';
import {
  MainBody,
  Title,
  Text,
  Canvas,
  Description,
  Paragraph,
  Donation,
  DescriptionDono,
  Button,
  Ellipse,
} from './styles';

import MoreInfo from './more-info';

const OrquestandoFuturosContent: FunctionComponent = () => {
  return (
    <MainBody>
      <Canvas>
        <Title>
          <MoreInfo />
          <Text>Compongamos un futuro juntos</Text>
        </Title>
        <Description>
          <Paragraph>
            Orquestando Futuros es un espacio orientador y facilitador de la continuidad del hacer
            musical de lxs jóvenes de Orquestas Escuelas. Queremos ser el puente para que lxs
            jóvenes puedan continuar su carrera musical sea esta profesional, sea a través de
            estudios académicos formales (conservatorio o universitarios) o el desarrollo musical
            amateur.{' '}
          </Paragraph>
        </Description>
        <Donation>
          <DescriptionDono>puedes ayudarnos desde una mínima donación.</DescriptionDono>
          <Button>Donar</Button>
        </Donation>
        <Ellipse />
      </Canvas>
    </MainBody>
  );
};

export default OrquestandoFuturosContent;
