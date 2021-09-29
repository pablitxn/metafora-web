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
  Content,
  PlantContainer,
  TextContainer,
  Dot,
} from './styles';

const HomeContent: FunctionComponent = () => {
  /* to refactor with styled sheet */
  const green = {
    red: 1,
    green: 46,
    blue: 15,
  };
  const lightGreen = {
    red: 146,
    green: 203,
    blue: 10,
  };
  const white = {
    red: 255,
    green: 255,
    blue: 255,
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
      <Card background={green}>
        <PlantContainer>
          <TextContainer>
            <Title isBolded minMargin background={yellow}>
              Seamos la voz que
            </Title>
            <Title isBolded minMargin background={yellow}>
              defienda al mundo
            </Title>
            <Title isBolded minMargin background={yellow}>
              que habitamos
            </Title>
          </TextContainer>

          <Plant src="/images/plant-in-circle.png" alt="planta en circulo" />
          <Dot size="0.69rem" position={{ top: '11rem', left: '3.5rem;' }} />
          <Dot size="0.69rem" position={{ top: '7rem', left: '20rem;' }} />
          <Dot size="0.69rem" position={{ top: '24rem', left: '7rem;' }} />
          <Dot size="0.5rem" position={{ top: '13rem', left: '8.8rem;' }} />
          <Dot size="0.5rem" position={{ top: '20rem', left: '22rem;' }} />
        </PlantContainer>
      </Card>

      <Card background={cream}>
        <Description>
          <Title isBolded textColor={green}>
            ¿Quiénes somos?
          </Title>
          <Text textColor={green}>
            Somos una organización joven,
            <br /> apasionada por ser parte de la
            <br /> construcción de un habitad más justo
            <br /> y equitativo, desarrollando proyectos
            <br /> educativos para colaborar con el
            <br /> desarrollo de un mundo más sustentable.
          </Text>
          <Button type="button">Sumate</Button>
        </Description>
        <Image src="/images/globe.png" alt="globo terraqueo" />
      </Card>

      <Card background={yellow}>
        <SubTitle>
          Promovemos una cultura de
          <br /> sustentabilidad a través
          <br /> de la educación ambiental.
        </SubTitle>
      </Card>

      <Card background={green}>
        <CardContainer>
          <Content>
            <TitleContainer>
              <Title textColor={lightGreen}>Misión</Title>
              <ImageTitle src="/images/mountain.png" alt="montaña icono con bandera" />
            </TitleContainer>
            <Text textColor={white}>
              Implementar Proyectos que generen oportunidades
              <br /> para la inclusión educativa, social, laboral y
              <br /> profesional.
            </Text>
          </Content>
          <Content>
            <TitleContainer>
              <Title textColor={lightGreen}>Visión</Title>
              <ImageTitle src="/images/anteojito.png" alt="anteojos icono" />
            </TitleContainer>
            <Text textColor={white}>
              Trabajamos por la construcción de un mundo
              <br /> sustentable para todes. Generando modelos
              <br /> participativos y fortaleciendo las capacidades de
              <br /> los intervinientes
            </Text>
          </Content>
        </CardContainer>
      </Card>
    </HomeContainer>
  );
};

export default HomeContent;
