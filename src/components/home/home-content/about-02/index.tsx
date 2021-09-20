import { FunctionComponent } from 'react';
import {
  About02Container,
  CardContainer,
  Card,
  CardContent,
  CardIcon,
  Title,
  Divider,
  Description,
} from './styles';

const About02: FunctionComponent = () => {
  return (
    <About02Container>
      <CardContainer>
        <Card>
          <CardIcon
            src="https://elcomercio.pe/resizer/pEmUqABPk7acTtznDSPfkGqCWxA=/1200x1200/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/DFB7IGD4LJAFRKGULDHU72RS7M.jpg"
            alt="icono del eva"
          />
          <CardContent>
            <Title>mision</Title>
            <Divider />
            <Description>
              implementar proyectos que <br />
              generen oportunidades para la <br />
              inclusion educativa, social, laboral
              <br /> y profesional.
            </Description>
          </CardContent>
        </Card>
        <Card>
          <CardIcon src="https://elcomercio.pe/resizer/pEmUqABPk7acTtznDSPfkGqCWxA=/1200x1200/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/DFB7IGD4LJAFRKGULDHU72RS7M.jpg" />
          <CardContent>
            <Title>vision</Title>
            <Divider />
            <Description>
              Trabajamos por la construccion de
              <br /> un mundo sustentable para todes.
              <br /> Generando modelos participativos
              <br /> y fortaleciendo las capacidades de
              <br /> los intervinientes.
            </Description>
          </CardContent>
        </Card>
      </CardContainer>
    </About02Container>
  );
};

export default About02;
