import { FunctionComponent } from 'react';
import {
  Icon,
  MoreInfoContainer,
  ExpandedInfo,
  Background,
  Title,
  Text,
  Description,
  Image,
} from './styles';

const MoreInfo: FunctionComponent<MoreInfoProps> = ({ isActive, handleClick }) => {
  return (
    <MoreInfoContainer>
      <Icon onClick={handleClick} isActive={isActive}>
        +
      </Icon>
      <ExpandedInfo onClick={handleClick} isActive={isActive}>
        <Background>
          <Description>
            <Title>+INFO</Title>
            <Text>
              Otra forma de donacion es alcanzandonos alguno de los materiales y/o instrumentos que
              estamos buscando. Podés contactarte con nosotros para saber cuales son:
            </Text>
            <Text>info@metafora.org.ar nicolas@metafora.org.ar 5491169480481</Text>
          </Description>
          <Image src="/images/camada-egresados-1.png" alt="camada de egresados" />
        </Background>
      </ExpandedInfo>
    </MoreInfoContainer>
  );
};

export default MoreInfo;
