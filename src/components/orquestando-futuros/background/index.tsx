import { FunctionComponent } from 'react';
import { BackgroundContainer, Canvas, GradientRec, Photo } from './styles';

const Background: FunctionComponent = () => {
  return (
    <BackgroundContainer>
      <Canvas>
        <GradientRec />
        <Photo src="/images/photo-1.png" alt="photo" />
      </Canvas>
    </BackgroundContainer>
  );
};

export default Background;
