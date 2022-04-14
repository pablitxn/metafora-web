import { FunctionComponent } from 'react';
import { About03Container, Card, Title, Divider, Text, Image, TextBold } from './styles';

const About03: FunctionComponent = () => {
  return (
    <About03Container>
      <Card>
        <Title>¿Quiénes somos?</Title>
        <Divider />
        <Text>
          Somos una organización joven, apasionada por construir un hábitat más Justo y Equitativo.
          Desarrollamos Proyectos Educativos para colaborar con un mundo más sustentable.
        </Text>
        <Image src="/images/solar-bomb.png" alt="bomba solar" />
        <TextBold>
          cultura | sustentabilidad <br /> educacion ambiental.
        </TextBold>
      </Card>
    </About03Container>
  );
};
export default About03;
