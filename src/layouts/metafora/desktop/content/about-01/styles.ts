import styled from 'styled-components';
import { fadeIn } from '../styles';

export const About01Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10%;
`;

export const CardContent = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 55rem;
  width: 35rem;
  animation: 3s ${fadeIn} ease;

  @media (max-width: 1024px) {
    margin-left: 40rem;
    padding: 5rem 0;
  }

  @media (max-width: 1366px) {
    margin-left: 50rem;
    padding: 5rem 0;
  }

  @media (min-height: 1057px) {
    justify-content: center;
    padding-bottom: 10rem;
  }
`;

export const Divider = styled.div`
  width: 50px;
  border: 1px solid #feffdf;
  margin-bottom: 2rem;
  border-radius: 0.5px;
  align-self: flex-start;
`;

export const Title = styled.h2`
  color: #93cb0a;
  font-size: 3rem;
  font-weight: bold;
  font-family: 'Josefin Sans', sans-serif;
`;

export const Button = styled.button`
  color: #012e0f;
  font-weight: bold;
  border: 2px solid #93cb0a;
  padding: 0.5rem 2rem;
  background-color: #93cb09;
  font-size: 1.25rem;
  font-family: 'Poppins', sans-serif;
  align-self: flex-start;
`;
