import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: visible;
  font-family: 'Josefin Sans', sans-serif;
  line-height: 1rem;
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
  margin: 3rem 1.2rem 2rem 4rem;
`;

export const Title = styled.h3<TitleProps>`
  ${({ isBolded }) => (isBolded ? `font-weight: bold;` : `font-weight: normal;`)}
  font-size: 1.25rem;
`;

/* Placeholder Name */
export const SubTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  font-weight: bold;
  font-size: 1.25rem;
  margin: 2rem;
  color: rgb(253, 255, 222);
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

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid rgb(254, 255, 223);
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

export const ImageTitle = styled.img`
  display: block;
  width: 1.8rem;
`;
