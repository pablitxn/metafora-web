import { FunctionComponent } from 'react';
import { About03Container, Card, Title, Divider, Text, Image, TextBold } from './styles';

const About03: FunctionComponent = () => {
  return (
    <About03Container>
      <Card>
        <Title>¿Quiénes somos?</Title>
        <Divider />
        <Text>
          Somos una organización joven,
          <br />
          apasionada por ser parte de la
          <br />
          construccion de un habitad más
          <br />
          justo y equitativo, desarrollando
          <br />
          proyectos educativos para
          <br />
          colaborar con el desarrollo de
          <br />
          un mundo mas sustentable.
        </Text>
        <Image src="/images/solar-bomb.png" alt="bomba solar" />
        <TextBold>
          Promovemos una cultura de
          <br /> sustentabilidad a travéz
          <br /> de la educacion ambiental.
        </TextBold>
      </Card>
    </About03Container>
  );
};
export default About03;
