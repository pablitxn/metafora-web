import { FunctionComponent } from 'react';
import colors from 'theme/colors';
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
  const { yellow, green, cream, lightGreen, white } = colors;

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
              <ImageTitle src="/images/mountain.png" alt="icono de una montaña" />
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
              <ImageTitle src="/images/binoculars.png" alt="icono de binoculares" />
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
