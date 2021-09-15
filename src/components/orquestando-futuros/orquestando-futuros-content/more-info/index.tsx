import { FunctionComponent } from 'react';
import {
  Icon,
  MoreInfoContainer,
  ExpandedInfo,
  Canvas,
  Title,
  Text,
  Description,
  Image,
} from './styles';

const MoreInfo: FunctionComponent<MoreInfoProps> = ({ isActive, handleClick }) => {
  return (
    <MoreInfoContainer>
      {!isActive && <Icon onClick={handleClick}>+</Icon>}
      {isActive && (
        <ExpandedInfo onClick={handleClick}>
          <Canvas>
            <Description>
              <Title>+INFO</Title>
              <Text>
                Otra forma de donacion es alcanzandonos alguno de los materiales y/o instrumentos
                que estamos buscando. Podés contactarte con nosotros para saber cuales son:
                <br />
                <br />
                ️info@metafora.org.ar
                <br /> nicolas@metafora.org.ar 5491169480481
              </Text>
            </Description>
            <Image src="/images/camada-egresados-1.png" alt="photo" />
          </Canvas>
        </ExpandedInfo>
      )}
    </MoreInfoContainer>
  );
};

export default MoreInfo;