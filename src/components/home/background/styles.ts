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
  height: 750px;
  bottom: -30%;
  left: 20%;
  ${({ currentPage }): string => {
    if (currentPage === '01') {
      return `
      animation: fadeInAnimation ease 3s
      animation-iteration-count: 1;
      animation-fill-mode: forwards;

      @keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
      100% {
          opacity: 1;
        }
      }
      `;
    }
    return '';
  }}

  ${({ currentPage }): string => {
    if (currentPage === '01') {
      return `
      transform: translateY(0px);
      transition: transform 0.5s ease-in-out;
      `;
    }
    if (currentPage === '02') {
      return `
      transform: translateY(-150px);
      transition: transform 0.5s ease-in-out;
      `;
    }
    if (currentPage === '03') {
      return `
      transform: translateY(-280px);
      transition: transform 0.5s ease-in-out;
      `;
    }
    return '';
  }}
`;

export const Core = styled.img<AnimatedElement>`
  width: 400px;
  height: 400px;
  bottom: 28%;
  left: 28%;
  ${({ currentPage }): string => {
    if (currentPage === '01') {
      return `
      transform: rotate(0deg);
      transition: transform 1.25s ease-in-out;
      `;
    }
    if (currentPage === '02') {
      return `
      transform: rotate(70deg);
      transition: transform 1.25s ease-in-out;
      `;
    }
    if (currentPage === '03') {
      return `
      transform: rotate(140deg);
      transition: transform 1.25s ease-in-out;
      `;
    }
    return '';
  }};

  @media (max-width: 1024px) {
    bottom: 20%;
  }
  @media (min-height: 1057px) {
    width: 500px;
    height: 500px;
    left: 24%;
    bottom: 7%;
  }
`;

export const LinesCanvas = styled.div`
  position: relative;
  width: 130px;
  height: 650px;
  bottom: -10rem;
  overflow: hidden;
  left: 38%;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media (min-height: 1057px) {
    left: 35%;
    bottom: -20rem;
  }
`;

export const LinesContainer = styled.div<AnimatedElement>`
  width: 100%;
  padding: -3rem;
  overflow: hidden;
  z-index: 9;
  ${({ currentPage }): string => {
    if (currentPage === '01') {
      return `
      height: 50%;
      transition: height 1.25s ease-in-out;
      `;
    }
    if (currentPage === '02') {
      return `
      height: 75%;
      transition: height 1.25s ease-in-out;
      `;
    }
    if (currentPage === '03') {
      return `
      height: 100%;
      transition: height 1.25s ease-in-out;
      `;
    }
    return '';
  }}
`;

export const LineA = styled.img`
  position: absolute;
  width: 60px;
  height: 800px;
  z-index: 10;
`;

export const LineB = styled.img`
  position: absolute;
  width: 60px;
  height: 800px;
  left: 25%;
  z-index: 10;
`;

export const LineC = styled.img`
  position: absolute;
  width: 60px;
  height: 800px;
  left: 52%;
  z-index: 10;
`;

export const Circle11 = styled.img<AnimatedElement>`
  width: 170px;
  height: 170px;
  left: 18%;
  top: 10%;
  bottom: 0;
  ${({ currentPage }): string => {
    if (currentPage === '01') {
      return `
      transform: rotate(180deg);
      transition: transform 0.5s ease-in-out;
      `;
    }
    if (currentPage === '02') {
      return `
      transform: rotate(40deg);
      transition: transform 0.5s ease-in-out;
      `;
    }
    if (currentPage === '03') {
      return `
      transform: rotate(0deg);
      transition: transform 0.5s ease-in-out;
      `;
    }
    return '';
  }}
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
