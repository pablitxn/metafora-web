import { FunctionComponent } from 'react';
import {
  Card,
  Description,
  Image,
  HomeContainer,
  Plant,
  Text,
  Title,
  SubTitle,
  Button,
  TitleContainer,
  CardContainer,
  ImageTitle,
} from './styles';

const HomeContent: FunctionComponent = () => {
  const green = {
    red: 1,
    green: 46,
    blue: 15,
  };
  const cream = {
    red: 253,
    green: 255,
    blue: 222,
  };

  const yellow = {
    red: 240,
    green: 203,
    blue: 0,
  };

  return (
    <HomeContainer>
      <Card rgb={green}>
        <Plant src="/images/plant-in-circle.png" />
      </Card>
      <Card rgb={cream}>
        <Description>
          <Title isBolded>¿Quiénes somos?</Title>
          <Text>
            Somos una organización joven,
            <br /> apasionada por ser parte de la
            <br /> construcción de un habitad más justo
            <br /> y equitativo, desarrollando proyectos
            <br /> educativos para colaborar con el
            <br /> desarrollo de un mundo más sustentable.
          </Text>
          <Button type="button">Sumate</Button>
        </Description>
        <Image src="/images/globe.png" />
      </Card>
      <Card rgb={yellow}>
        <SubTitle>
          Promovemos una cultura de
          <br /> sustentabilidad a través
          <br /> de la educación ambiental.
        </SubTitle>
      </Card>
      <Card rgb={green}>
        <CardContainer>
          <TitleContainer>
            <Title>Misión</Title>
            <ImageTitle src="/images/mountain.png" />
          </TitleContainer>
          <Text>
            Implementar Proyectos que generen oportunidades
            <br /> para la inclusión educativa, social, laboral y
            <br /> profesional.
          </Text>
        </CardContainer>
      </Card>
    </HomeContainer>
  );
};

export default HomeContent;
