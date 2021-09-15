import React, { FunctionComponent } from 'react';
import {
  BackgroundContainer,
  Plant,
  Core,
  LinesCanvas,
  LinesContainer,
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

const Background: FunctionComponent<IBackgroundProps> = ({ currentPage }) => {
  return (
    <BackgroundContainer>
      <Canvas>
        <Plant currentPage={currentPage} src="/images/plant.png" alt="logo" />
        <Core src="/images/circle-core.svg" alt="logo" />
        <LinesCanvas>
          <LinesContainer currentPage={currentPage}>
            <LineA src="/images/line.png" alt="logo" />
            <LineB src="/images/line.png" alt="logo" />
            <LineC src="/images/line.png" alt="logo" />
          </LinesContainer>
        </LinesCanvas>
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
