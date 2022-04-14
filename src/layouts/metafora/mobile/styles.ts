import styled from 'styled-components';
import { colorPicker, backgroundPicker } from 'theme/helpers';

export const HomeLayoutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Josefin Sans', sans-serif;
  line-height: 1rem;
`;

export const PlantContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TextContainer = styled.div`
  position: relative;
  top: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;

  @media (max-width: 411px) {
    top: 16rem;
  }

  @media (max-width: 360px) {
    top: 14rem;
  }
`;

export const Plant = styled.img`
  position: relative;
  width: 18.75rem;
  top: 3rem;
  margin-left: 2rem;

  @media (max-width: 360px) {
    width: 16.5rem;
    top: 2.5rem;
    margin-left: 1.5rem;
  }
`;

export const Dot = styled.div<DotProps>`
  position: absolute;
  background: rgb(147, 203, 9);
  border-radius: 50%;
  ${({ position }) => {
    const { top, left } = position;
    return `top: ${top}rem;
            left: ${left}rem;
            @media (max-width: 411px) {
              top: ${top + 1.5}rem;
            }
            @media (max-width: 360px) {
              ${top === 24 ? `top:${top - 2}rem;` : `top: ${top - 1}rem;`}
              ${left > 11.25 ? `left: ${left - 3}rem;` : `left: ${left}rem;`}
            }
            `;
  }}
  ${({ size }) =>
    `width: ${size}rem;
    height: ${size}rem;

    @media (max-width: 360px) {
      width: ${(3 * size) / 4}rem;
    height: ${(3 * size) / 4}rem;
    }`}
`;

export const Image = styled.img`
  display: block;
  width: 30%;
`;

export const Description = styled.div`
  width: 72%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3rem 1rem 2rem 4rem;

  @media (max-width: 411px) {
    padding-left: 1.5rem;
    margin: 3rem 0.5rem 2rem 3rem;
  }

  @media (max-width: 360px) {
    padding-left: 0.5rem;
    margin: 2rem 0.5rem 1rem 2rem;
  }
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

  @media (max-width: 411px) {
    margin-top: 1rem;
  }
`;

export const Title = styled.h3<TitleProps>`
  font-size: 1.25rem;

  @media (max-width: 411px) {
    margin-bottom: 0.5rem;
    ${({ minMargin }) => minMargin && `margin: 0.1rem;`}
  }

  @media (max-width: 360px) {
    ${({ minMargin }) => minMargin && `margin: 0.1rem;`}
  }

  ${({ isBolded }) => (isBolded ? `font-weight: bold;` : `font-weight: normal;`)}
  ${({ minMargin }) => minMargin && `margin: 0.1rem;`}
  ${({ textColor }) => colorPicker(textColor)}
  ${({ background }) => backgroundPicker(background)}
`;

export const SubTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  text-align: center;
  font-size: 1.5rem;

  @media (max-width: 411px) {
    font-size: 1.25rem;
  }

  @media (max-width: 360px) {
    padding: 2rem 0;
  }
`;

export const SubTitle = styled.div`
  font-family: 'Josefin Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: 115.5%;
  color: rgb(253, 255, 222);
`;

export const Text = styled.p<TextProps>`
  font-size: 1rem;
  margin: 0;

  @media (max-width: 411px) {
    font-size: 0.75rem;
  }

  ${({ textColor }) => colorPicker(textColor)}
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

export const CardContent = styled.div<CardContentProps>`
  width: 17.5rem;
  display: flex;
  flex-direction: column;
  margin: 2.5rem;

  @media (max-width: 411px) {
    ${({ position }) => (position === 'top' ? `margin: 3rem 0 2rem 0;` : `margin: 0 0 3rem 0;`)}
  }

  @media (max-width: 360px) {
    padding: 0 1rem;
    ${({ position }) => (position === 'top' ? `margin: 2rem 0 1rem 0;` : `margin: 0 0 2rem 0;`)}
  }
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
