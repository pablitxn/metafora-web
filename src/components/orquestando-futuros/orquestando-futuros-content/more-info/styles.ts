import styled from 'styled-components';

export const MoreInfoContainer = styled.div``;

export const Icon = styled.div`
  display: flex;
  width: 2rem;
  height: 2rem;
  color: white;
  justify-content: center;
  align-content: center;
  text-align: center;
  flex-direction: column;
  border-radius: 50%;
  background: #000000;
  user-select: none;
  cursor: pointer;
`;

export const ExpandedInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(219, 43, 118, 0.74);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Background = styled.div`
  width: 85.375rem;
  height: 85.375rem;
  border-radius: 50%;
  background: black;

  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 13rem;
`;

export const Description = styled.div`
  position: relative;
  display: flex;
  width: 21%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 2.5rem;
  line-height: 1.155rem;

  display: flex;
  align-items: center;

  color: #e26f0d;
`;
export const Text = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: 1.305rem;

  display: flex;
  align-items: center;

  color: #e26f0d;
`;
export const Image = styled.img`
  display: block;
  width: 50%;
  height: auto;
`;
