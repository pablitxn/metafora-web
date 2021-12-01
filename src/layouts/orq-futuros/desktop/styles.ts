import styled from 'styled-components';

export const ContentContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: hidden;
  background: #e26f0d;
`;

export const Content = styled.div`
  display: flex;
  width: 95%;
  height: 70vh;
  background: url('./images/background-orquestando.png');
  background-repeat: no-repeat;
  background-position: right;
`;

export const TitleText = styled.h1`
  text-align: end;
  line-height: 5rem;
  font-family: 'Bebas Neue', sans-serif;
  border-bottom: 0.15rem solid #fff;
  font-weight: normal;
  font-size: 2.5rem;
  text-transform: uppercase;
  color: #ffff;
`;

export const Description = styled.div`
  width: 61%;
  display: flex;
  flex-direction: column;
  padding: 3rem 11rem 3rem 9rem;
`;

export const Text = styled.p<TextProps>`
  font-style: normal;
  line-height: 1.31em;
  color: #ffff;
  padding-left: 6rem;
`;
export const TextBolded = styled.p`
  color: #fff;
  font-weight: bold;
  padding-left: 6rem;
  width: 70%;
  margin-bottom: 2rem;
  line-height: 1.4em;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Button = styled.button`
  width: 9rem;
  background: rgba(136, 226, 208, 1);
  border: none;
  box-sizing: border-box;
  color: #000;
  font-style: normal;
  font-weight: bold;
  font-size: 1.25rem;
  padding: 0.5rem 1rem;
  margin-left: 6rem;
`;
