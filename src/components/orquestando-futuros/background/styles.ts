import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: #e26f0d;
`;

export const Canvas = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;

export const Photo = styled.img`
  width: 50vw;
  height: 100vh;
`;

export const GradientRec = styled.div`
  width: 5vw;
  height: 100vh;
  background: linear-gradient(180deg, #ff807e 0%, #db2b76 46.35%, #23afaf 100%);
`;
