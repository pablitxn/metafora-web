import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  position: absolute;
  top: 10rem;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 2;
`;

export const Canvas = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  img {
    position: absolute;
  }
`;

export const Plant = styled.img<AnimatedElement>`
  z-index: 10;
  height: 550px;
  bottom: 0;
  left: 25%;

  ${({ currentPage }): string => {
    if (currentPage === '01') {
      return `
      transform: translateY(0px);
      transition: transform 0.5s ease-in-out;
      `;
    }
    if (currentPage === '02') {
      return `
      transform: translateY(-50px);
      transition: transform 0.5s ease-in-out;
      `;
    }
    if (currentPage === '03') {
      return `
      transform: translateY(-100px);
      transition: transform 0.5s ease-in-out;
      `;
    }
    return '';
  }}
`;
export const Core = styled.img`
  width: 400px;
  height: 400px;
  bottom: 28%;
  left: 28%;
`;
export const LineA = styled.img<AnimatedElement>`
  width: 60px;
  height: 500px;
  left: 36%;
  bottom: -2rem;
  z-index: 9;
`;
export const LineB = styled.img<AnimatedElement>`
  width: 60px;
  height: 500px;
  left: 39%;
  bottom: -2rem;
  z-index: 9;
`;
export const LineC = styled.img<AnimatedElement>`
  width: 60px;
  height: 500px;
  left: 42%;
  bottom: -2rem;
  z-index: 9;
`;

export const Circle11 = styled.img`
  width: 170px;
  height: 170px;
  left: 18%;
  top: 10%;
  bottom: 0;
`;

export const DotMedium = styled.img`
  width: 50px;
  height: 50px;
  left: 30%;
  top: 4%;
  bottom: 0;
`;

export const DotSmallA = styled.img`
  width: 20px;
  height: 20px;
  left: 20%;
  top: 0;
  bottom: 0;
`;
export const DotSmallB = styled.img`
  width: 20px;
  height: 20px;
  left: 22%;
  top: 44%;
`;
export const DotSmallC = styled.img`
  width: 20px;
  height: 20px;
  left: 15%;
  top: 40%;
  bottom: 0;
`;
