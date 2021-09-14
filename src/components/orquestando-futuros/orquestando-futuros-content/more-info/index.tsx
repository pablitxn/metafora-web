import { FunctionComponent } from 'react';
import {
  /* Icon, */ MoreInfoContainer,
  ExpandedInfo,
  Canvas,
  Title,
  Paragraph,
  Description,
  Image,
} from './styles';

const MoreInfo: FunctionComponent = () => {
  return (
    <MoreInfoContainer>
      {/* <Icon>+</Icon> */}
      <ExpandedInfo>
        <Canvas>
          <Description>
            <Title>+INFO</Title>
            <Paragraph>
              Otra forma de donacion es alcanzandonos alguno de los materiales y/o instrumentos que
              estamos buscando. Podés contactarte con nosotros para saber cuales son:
              ️info@metafora.org.ar nicolas@metafora.org.ar 5491169480481
            </Paragraph>
          </Description>
          <Image src="/images/camada-egresados-1.png" alt="photo" />
        </Canvas>
      </ExpandedInfo>
    </MoreInfoContainer>
  );
};

export default MoreInfo;
