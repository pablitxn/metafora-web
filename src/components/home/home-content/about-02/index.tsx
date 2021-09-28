import { FunctionComponent } from 'react';
import {
  About02Container,
  CardContainer,
  Card,
  CardContent,
  CardIcon,
  Title,
  Divider,
  Description,
} from './styles';

const About02: FunctionComponent = () => {
  return (
    <About02Container>
      <CardContainer>
        <Card>
          <CardIcon src="/images/mountain.png" alt="montaña icono con bandera" />
          <CardContent>
            <Title>Misión</Title>
            <Divider />
            <Description>
              implementar proyectos que <br />
              generen oportunidades para la <br />
              inclusión educativa, social, laboral
              <br /> y profesional.
            </Description>
          </CardContent>
        </Card>
        <Card>
          <CardIcon src="/images/anteojito.png" alt="anteojos icono" />
          <CardContent>
            <Title>Visión</Title>
            <Divider />
            <Description>
              Trabajamos por la construcción de
              <br /> un mundo sustentable para todes.
              <br /> Generando modelos participativos
              <br /> y fortaleciendo las capacidades de
              <br /> los intervinientes.
            </Description>
          </CardContent>
        </Card>
      </CardContainer>
    </About02Container>
  );
};

export default About02;
