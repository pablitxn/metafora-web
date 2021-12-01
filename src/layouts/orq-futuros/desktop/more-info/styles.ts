import styled from 'styled-components';

export const MoreInfoContainer = styled.div``;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Description = styled.div`
  position: relative;
  display: flex;
  width: 21%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  color: #fff;
`;

export const Title = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 2.5rem;
  line-height: 1.155rem;
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: 1.305rem;
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  display: block;
  width: 50%;
  height: auto;
`;
