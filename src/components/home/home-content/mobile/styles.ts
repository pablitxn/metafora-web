import styled from 'styled-components';
import { colorPicker, backgroundPicker } from 'theme/helpers';

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: Josefin Sans, sans-serif;
  line-height: 1rem;
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
export const ImgConteiner = styled.div`
  display: flex;
  z-index: 3;
  justify-content: center;
  margin-bottom: -3rem;
`;

export const Plant = styled.img`
  width: 18.75rem;
  top: 3rem;
  margin-left: 2rem;
`;

export const Dot = styled.div<DotProps>`
  position: absolute;
  background: rgb(147, 203, 9);
  border-radius: 50%;
  ${({ position }) => {
    const { top, left, bottom, right } = position;
    return `top: ${top};
            left: ${left};
            bottom: ${bottom};
            right: ${right};`;
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
  padding: 3rem 1rem;
  font-family: Josefin Sans, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 115.5%;
  display: flex;
  align-items: center;
  text-align: center;
  color: rgb(253, 255, 222);
`;

export const Text = styled.p<TextProps>`
  font-size: 1rem;
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
  font-family: Josefin Sans, sans-serif;
  font-size: 1rem;
  line-height: 1.15rem;
  margin-top: 2rem;
`;

export const Card = styled.div<CardProps>`
  display: flex;
  width: 100%;

  ${({ background }) => backgroundPicker(background)}
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3.5rem;
`;

export const CardContent = styled.div`
  width: 17.5rem;
  display: flex;
  flex-direction: column;
  margin: 2.5rem;
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
  width: 1.8rem;
`;
