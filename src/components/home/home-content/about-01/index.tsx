import { FunctionComponent } from 'react';
import { About01Container, CardContent, Divider, Title, Button } from './styles';

const About01: FunctionComponent = () => {
  return (
    <About01Container>
      <CardContent>
        <Title>Seamos la voz que defienda al mundo que habitamos</Title>
        <Divider />
        <Button type="button" className="about-01__button">
          Sumate
        </Button>
      </CardContent>
    </About01Container>
  );
};

export default About01;
