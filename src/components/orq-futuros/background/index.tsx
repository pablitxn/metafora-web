import { FunctionComponent } from 'react';
import { BackgroundContainer, GradientRec, Photo } from './styles';

const Background: FunctionComponent = () => {
  return (
    <BackgroundContainer>
      <GradientRec />
      <Photo
        src="/images/orquestando-background.jpg"
        alt="jóvenes tocando instrumentos musicales"
      />
    </BackgroundContainer>
  );
};

export default Background;
