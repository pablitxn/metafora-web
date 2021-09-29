import styled from 'styled-components';

const colorPicker = (rgb: Rgb): string => {
  if (rgb) {
    const { red, green, blue } = rgb;
    return `color: rgb(${red}, ${green}, ${blue})`;
  }
  return ``;
};

const backgroundPicker = (rgb: Rgb): string => {
  if (rgb) {
    const { red, green, blue } = rgb;
    return `background: rgb(${red}, ${green}, ${blue})`;
  }
  return ``;
};

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
  ${({ background }) => backgroundPicker(background)}
`;

export const PlantContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TextContainer = styled.div`
  position: relative;
  top: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
`;

export const Plant = styled.img`
  position: relative;
  width: 18.75rem;
  top: 3rem;
  margin-left: 2rem;
`;

export const Dot = styled.div<DotProps>`
  position: absolute;
  background: rgb(147, 203, 9);
  border-radius: 50%;
  ${({ position }) => {
    const { top, left } = position;
    return `top: ${top}; 
            left: ${left};`;
  }}
  ${({ size }) =>
    `width: ${size}; 
    height: ${size};`}
`;

export const Image = styled.img`
  display: block;
  width: 28%;
`;

export const Description = styled.div`
  width: 72%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3rem 1rem 2rem 4rem;
`;

export const Title = styled.h3<TitleProps>`
  font-size: 1.25rem;

  ${({ isBolded }) => (isBolded ? `font-weight: bold;` : `font-weight: normal;`)}
  ${({ minMargin }) => minMargin && `margin: 0.1rem;`}
  ${({ textColor }) => colorPicker(textColor)}
  ${({ background }) => backgroundPicker(background)}
`;

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

export const Text = styled.p<TextProps>`
  font-size: 0.75rem;
  margin: 0;
  ${({ textColor }) => colorPicker(textColor)}
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

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3.5rem;
`;

export const Content = styled.div`
  width: 17.5rem;
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
`;

export const TitleContainer = styled.div`
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid rgb(254, 255, 223);
  margin-bottom: 0.75rem;
`;

export const ImageTitle = styled.img`
  display: block;
  width: 1.8rem;
`;
