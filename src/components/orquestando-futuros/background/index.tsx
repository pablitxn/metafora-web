import { FunctionComponent } from 'react';
import { BackgroundContainer, GradientRec, Photo } from './styles';

const Background: FunctionComponent = () => {
  return (
    <BackgroundContainer>
      <GradientRec />
      <Photo src="/images/photo-1.png" alt="joven tocando el violin" />
    </BackgroundContainer>
  );
};

export default Background;
