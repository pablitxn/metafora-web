import styled from 'styled-components';

export const MainBody = styled.div`
  display: flex;
  width: 100%;
  z-index: 2;
  align-items: center;
  justify-content: center;
`;
export const Canvas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;
export const Title = styled.div`
  display: flex;
  justify-content: center;
`;

export const Text = styled.h1`
  width: 29vw;
  height: 6.1vh;

  margin: 0;
  padding-left: 1rem;
  border-bottom: 2px solid #ffffff;

  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: normal;
  font-size: 1.55rem;
  /* line-height: 115.5%; */
  text-transform: uppercase;

  color: #ffffff;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1.5rem;
`;
export const Paragraph = styled.p`
  width: 14rem;

  font-family: 'Josefin Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: 1.31em;

  display: flex;
  align-items: center;

  color: #ffffff;
`;
export const Donation = styled.div`
  width: 17.7%;
`;
export const DescriptionDono = styled.div`
  font-family: Josefin Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 0.9375rem;
  line-height: 1.305rem;
  /* or 20px */

  display: flex;
  align-items: center;

  color: #ffffff;
`;
export const Button = styled.div`
  width: 100%;

  border: 2px solid #88e2d0;
  box-sizing: border-box;

  justify-content: center;
  align-content: center;
  text-align: center;
  flex-direction: column;

  color: #88e2d0;
  font-style: normal;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.155rem;
`;
export const Ellipse = styled.div`
  position: absolute;
  width: 37%;
  height: 75%;
  top: 16%;
  left: 82%;

  border-radius: 50%;

  background: linear-gradient(180deg, #db2b76 0%, rgba(219, 43, 118, 0) 100%);
`;
