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
`;

export const Image = styled.img`
  position: absolute;
  bottom: 0;
  left: 25%;

  & .plant {
    z-index: 10;
    height: 550px;
  }

  & .core {
    width: 400px;
    height: 400px;
    bottom: 28%;
    left: 28%;
  }

  & .line-a {
    width: 60px;
    height: 500px;
    left: 36%;
    bottom: -2rem;
    z-index: 9;
  }
  & .line-b {
    width: 60px;
    height: 500px;
    left: 39%;
    bottom: -2rem;
    z-index: 9;
  }
  & .line-c {
    width: 60px;
    height: 500px;
    left: 42%;
    bottom: -2rem;
    z-index: 9;
  }

  & .circle-11 {
    width: 170px;
    height: 170px;
    left: 18%;
    top: 10%;
  }

  & .dot-medium {
    width: 50px;
    height: 50px;
    left: 30%;
    top: 4%;
  }

  & .dot-small-a {
    width: 20px;
    height: 20px;
    left: 20%;
    top: 0;
  }
  & .dot-small-b {
    width: 20px;
    height: 20px;
    left: 22%;
    top: 44%;
  }
  & .dot-small-c {
    width: 20px;
    height: 20px;
    left: 15%;
    top: 40%;
  }
`;
