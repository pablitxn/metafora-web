import React, { FunctionComponent } from 'react';
import {
  BackgroundContainer,
  Plant,
  Core,
  LineA,
  LineB,
  LineC,
  Circle11,
  Canvas,
  DotMedium,
  DotSmallA,
  DotSmallB,
  DotSmallC,
} from './styles';

const Background: FunctionComponent = () => {
  return (
    <BackgroundContainer>
      <Canvas>
        <Plant src="/images/plant.png" alt="logo" />
        <Core src="/images/circle-core.svg" alt="logo" />
        <LineA src="/images/line.png" alt="logo" />
        <LineB src="/images/line.png" alt="logo" />
        <LineC src="/images/line.png" alt="logo" />
        <Circle11 src="/images/circle-11.png" alt="logo" />
        <DotMedium src="/images/dot-medium.png" alt="logo" />
        <DotSmallA src="/images/dot-small.png" alt="logo" />
        <DotSmallB src="/images/dot-small.png" alt="logo" />
        <DotSmallC src="/images/dot-small.png" alt="logo" />
      </Canvas>
    </BackgroundContainer>
  );
};

export default Background;
