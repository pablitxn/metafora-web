import styled from 'styled-components';

export const OrquestandoContainer = styled.div`
  display: flex;
  width: 100%;
  z-index: 2;
  align-items: center;
  justify-content: center;

  .whatsapp-icon {
    position: absolute;
    right: 3rem;
    bottom: 3rem;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 19rem;
  margin-top: 1rem;
`;

export const Title = styled.div`
  display: flex;
  height: 6%;
  justify-content: center;
  border-bottom: 0.125rem solid #ffff;
`;

export const TitleText = styled.h1`
  margin: 0;
  padding-left: 1rem;
  font-family: 'Bebas Neue', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  text-transform: uppercase;
  color: #ffff;
`;

export const Description = styled.div`
  width: 14rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1.5rem;
`;

export const Text = styled.p<TextProps>`
  font-family: 'Josefin Sans', sans-serif;
  font-style: normal;
  line-height: 1.31em;
  ${({ isBigger }) => isBigger && `font-size: 3.75rem;`}
  ${({ isBolded }) => (isBolded ? `font-weight: bold;` : `font-weight: normal;`)}
  color: #ffff;
  margin: 0;
`;

export const Button = styled.button`
  width: 58%;
  background: transparent;
  height: 2.625rem;
  border: 0.125rem solid #88e2d0;
  box-sizing: border-box;
  color: #88e2d0;
  font-style: normal;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.155rem;
  padding: 0;
`;

export const Ellipse = styled.div`
  position: absolute;
  top: 16%;
  left: 82%;
  width: 35.25rem;
  height: 35.25rem;
  border-radius: 50%;
  background: linear-gradient(180deg, #db2b76 0%, rgba(219, 43, 118, 0) 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EllipseText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20rem;
  margin-bottom: 5rem;
`;