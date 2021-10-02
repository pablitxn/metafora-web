import { FunctionComponent } from 'react';
import { About03Container, Card, Title, Divider, Text, Image, TextBold } from './styles';

const About03: FunctionComponent = () => {
  return (
    <About03Container>
      <Card>
        <Title>¿Quiénes somos?</Title>
        <Divider />
        <Text>
          Somos una organización joven, apasionada por ser parte de la construccion de un habitad
          más justo y equitativo, desarrollando proyectos educativos para colaborar con el
          desarrollo de un mundo mas sustentable.
        </Text>
        <Image src="/images/solar-bomb.png" alt="bomba solar" />
        <TextBold>
          Promovemos una cultura de sustentabilidad a travéz de la educacion ambiental.
        </TextBold>
      </Card>
    </About03Container>
  );
};
export default About03;
