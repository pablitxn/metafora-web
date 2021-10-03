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
  CardContent,
  PlantContainer,
  TextContainer,
  Dot,
} from './styles';

const HomeContent: FunctionComponent = () => {
  return (
    <HomeContainer>
      <Card background={colors.green}>
        <PlantContainer>
          <TextContainer>
            <Title isBolded minMargin background={colors.yellow}>
              Seamos la voz que
            </Title>
            <Title isBolded minMargin background={colors.yellow}>
              defienda al mundo
            </Title>
            <Title isBolded minMargin background={colors.yellow}>
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

      <Card background={colors.cream}>
        <Description>
          <Title isBolded textColor={colors.green}>
            ¿Quiénes somos?
          </Title>
          <Text textColor={colors.green}>
            Somos una organización joven, apasionada por ser parte de la construcción de un habitad
            más justo y equitativo, desarrollando proyectos educativos para colaborar con el
            desarrollo de un mundo más sustentable.
          </Text>
          <Button type="button">Sumate</Button>
        </Description>
        <Image src="/images/globe.png" alt="globo terraqueo" />
      </Card>

      <Card background={colors.yellow}>
        <SubTitle>
          Promovemos una cultura de sustentabilidad a través de la educación ambiental.
        </SubTitle>
      </Card>

      <Card background={colors.green}>
        <CardContainer>
          <CardContent>
            <TitleContainer>
              <Title textColor={colors.lightGreen}>Misión</Title>
              <ImageTitle src="/images/mountain.png" alt="icono de una montaña" />
            </TitleContainer>
            <Text textColor={colors.white}>
              Implementar Proyectos que generen oportunidades para la inclusión educativa, social,
              laboral y profesional.
            </Text>
          </CardContent>
          <CardContent>
            <TitleContainer>
              <Title textColor={colors.lightGreen}>Visión</Title>
              <ImageTitle src="/images/binoculars.png" alt="icono de binoculares" />
            </TitleContainer>
            <Text textColor={colors.white}>
              Trabajamos por la construcción de un mundo sustentable para todes. Generando modelos
              participativos y fortaleciendo las capacidades de los intervinientes
            </Text>
          </CardContent>
        </CardContainer>
      </Card>
    </HomeContainer>
  );
};

export default HomeContent;
