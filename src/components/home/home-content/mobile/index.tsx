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
  ImgConteiner,
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
          <ImgConteiner>
            <Plant src="/images/plant-in-circle.png" alt="planta en circulo" />
            <Dot
              size="0.69rem"
              position={{ top: '8rem', left: '5.5rem', bottom: '0', right: '0' }}
            />
            <Dot size="0.69rem" position={{ top: '7rem', left: '', bottom: '0', right: '2rem' }} />
            <Dot size="0.69rem" position={{ top: '21rem', left: '8rem', bottom: '0', right: '' }} />
            <Dot
              size="0.5rem"
              position={{ top: '11rem', left: '11rem', bottom: '0', right: '0' }}
            />
            <Dot
              size="0.5rem"
              position={{ top: '17.5rem', left: '', bottom: '0', right: '1rem' }}
            />
          </ImgConteiner>
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
        <Image src="/images/solar-bomb-kit-1.png" alt="Bomba solar" />
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
