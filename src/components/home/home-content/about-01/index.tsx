import { FunctionComponent } from 'react';
import { About01Container, CardContent, Divider, Title, Button } from './styles';

interface IAbout01Props {
  currentPage: Page;
}

const About01: FunctionComponent<IAbout01Props> = ({ currentPage }) => {
  return (
    <About01Container>
      <CardContent currentPage={currentPage}>
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
