import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: visible;
  font-family: 'Josefin Sans', sans-serif;
  line-height: 1.15rem;
`;

export const Card = styled.div<CardProps>`
  display: flex;
  width: 100%;
  ${({ rgb }) => {
    const { red, green, blue } = rgb;
    return `background: rgb(${red}, ${green}, ${blue})`;
  }}
`;

export const Plant = styled.img`
  position: relative;
  display: block;
  width: 18.75rem;
  top: 3rem;
  margin-left: 2rem;
`;

export const Image = styled.img``;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 4rem;
  margin-right: 1.2rem;
`;

export const Title = styled.h3`
  font-size: 1.25rem;
`;

export const Text = styled.p`
  font-size: 0.75rem;
  margin: 0;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 5.25rem;
  background: transparent;
  color: rgb(1, 46, 15);
  border: 2px solid #012e0f;

  font-family: 'Josefin Sans', sans-serif;
  font-size: 1rem;
  line-height: 1.15rem;
  margin-top: 2rem;
`;
