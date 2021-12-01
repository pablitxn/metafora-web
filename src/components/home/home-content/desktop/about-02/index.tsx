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
  Button,
  Image,
  ImgContainer,
} from './styles';

const About02: FunctionComponent = () => {
  return (
    <About02Container>
      <CardContainer>
        <Card>
          <CardContent>
            <Title>
              Misión
              <CardIcon src="/images/mountain.png" alt="icono con montañas" />
            </Title>
            <Divider />
            <Description>
              Implementar proyectos que generen oportunidades para la inclusión educativa, social,
              laboral y profesional.
            </Description>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Title>
              Visión
              <CardIcon src="/images/binoculars.png" alt="icono con binoculares" />
            </Title>
            <Divider />
            <Description>
              Trabajamos por la construcción de un mundo sustentable para todes. Generando modelos
              participativos y fortaleciendo las capacidades de los intervinientes.
            </Description>
          </CardContent>
        </Card>
      </CardContainer>
      <ImgContainer>
        <Image src="/images/solar-bomb.png" alt="bomba solar" />
        <Button>{'En accion   >'} </Button>
      </ImgContainer>
    </About02Container>
  );
};

export default About02;
