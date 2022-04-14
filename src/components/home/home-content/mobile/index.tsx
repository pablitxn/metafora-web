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
  SubTitleContainer,
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
          <Dot size={0.69} position={{ top: 11, left: 3.5 }} />
          <Dot size={0.69} position={{ top: 7, left: 20 }} />
          <Dot size={0.69} position={{ top: 24, left: 7 }} />
          <Dot size={0.5} position={{ top: 13, left: 8.8 }} />
          <Dot size={0.5} position={{ top: 20, left: 22 }} />
        </PlantContainer>
      </Card>

      <Card background={colors.cream}>
        <Description>
          <Title isBolded textColor={colors.green}>
            ¿Quiénes somos?
          </Title>
          <Text textColor={colors.green}>
            Somos una organización joven, apasionada por construir un hábitat más Justo y
            Equitativo. Desarrollamos Proyectos Educativos para colaborar con un mundo más
            sustentable.
          </Text>
          <Button type="button">Sumate</Button>
        </Description>
        <Image src="/images/solar-bomb.png" alt="bomba solar" />
      </Card>

      <Card background={colors.yellow}>
        <SubTitleContainer>
          <SubTitle>Promovemos una cultura de</SubTitle>
          <SubTitle>sustentabilidad a través</SubTitle>
          <SubTitle>de la educación ambiental.</SubTitle>
        </SubTitleContainer>
      </Card>

      <Card background={colors.green}>
        <CardContainer>
          <CardContent position="top">
            <TitleContainer>
              <Title textColor={colors.lightGreen}>Misión</Title>
              <ImageTitle src="/images/mountain.png" alt="icono de una montaña" />
            </TitleContainer>
            <Text textColor={colors.white}>
              Implementar Proyectos que generen oportunidades para la inclusión educativa, social,
              laboral y profesional.
            </Text>
          </CardContent>
          <CardContent position="bottom">
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
