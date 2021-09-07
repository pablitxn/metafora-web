import { FunctionComponent } from 'react';
import { BackgroundContainer, Canvas, Image } from './styles';

const Background: FunctionComponent = () => {
  return (
    <BackgroundContainer>
      <Canvas>
        <Image className="plant" src="/images/plant.png" alt="logo" />
        <Image className="core" src="/images/circle-core.svg" alt="logo" />
        <Image className="line-a" src="/images/line.png" alt="logo" />
        <Image className="line-b" src="/images/line.png" alt="logo" />
        <Image className="line-c" src="/images/line.png" alt="logo" />
        <Image className="circle-11" src="/images/circle-11.png" alt="logo" />
        <Image className="dot-medium" src="/images/dot-medium.png" alt="logo" />
        <Image className="dot-small-a" src="/images/dot-small.png" alt="logo" />
        <Image className="dot-small-b" src="/images/dot-small.png" alt="logo" />
        <Image className="dot-small-c" src="/images/dot-small.png" alt="logo" />
      </Canvas>
    </BackgroundContainer>
  );
};

export default Background;
