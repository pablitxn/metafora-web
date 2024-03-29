import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  background: #e26f0d;
`;

export const Photo = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
`;

export const GradientRec = styled.div`
  width: 5%;
  height: 100%;
  background: linear-gradient(180deg, #ff807e 0%, #db2b76 46.35%, #23afaf 100%);
`;
