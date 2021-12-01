import { FunctionComponent } from 'react';
import { Background, Title, Text, Description, Image } from './styles';

const MoreInfo: FunctionComponent = () => {
  return (
    <Background>
      <Image src="/images/camada-egresados.png" alt="camada de egresados" />
      <Description>
        <Title>+INFO</Title>
        <Text>
          Otra forma de donacion es alcanzandonos alguno de los materiales y/o instrumentos que
          estamos buscando. Podés contactarte con nosotros para saber cuales son:
        </Text>
        <Text>info@metafora.org.ar nicolas@metafora.org.ar 5491169480481</Text>
      </Description>
    </Background>
  );
};

export default MoreInfo;
