import styled from 'styled-components';

export const MoreInfoContainer = styled.div``;

export const Icon = styled.div`
  display: flex;

  width: 32px;
  height: 32px;

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
`;
export const Canvas = styled.div`
  position: relative;
  width: 1366px;
  height: 1366px;
  left: 116px;
  top: -252px;
  border-radius: 50%;
  background: black;

  display: flex;
  justify-content: center;
`;

export const Description = styled.div`
  position: relative;
  top: 252px;
  display: flex;
  width: 283px;
  height: 100vh;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  /* justify-content: flex-start; */
`;

export const Title = styled.h2`
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: normal;
  font-size: 2.5rem;
  line-height: 1.155rem;
  /* or 46px */

  display: flex;
  align-items: center;

  color: #e26f0d;
`;
export const Text = styled.p`
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: normal;
  line-height: 1.305rem;
  /* or 21px */

  display: flex;
  align-items: center;

  color: #e26f0d;
`;
export const Image = styled.img`
  margin-top: 500px;
  display: block;
  width: auto;
  height: 290px;
`;