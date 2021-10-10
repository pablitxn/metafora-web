import styled from 'styled-components';
import { fadeIn } from '../styles';

export const About02Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  animation: 3s ${fadeIn} ease;
`;

export const Title = styled.h2`
  color: #93cb0a;
  font-weight: bold;
  font-family: 'Josefin Sans', sans-serif;
  margin-top: 0;

  @media (max-width: 1024px) {
    margin-bottom: 1rem;
  }
`;

export const Card = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 50rem;
  gap: 2rem;

  @media (max-width: 1024px) {
    margin-left: 40rem;
    padding: 5rem 0;
  }
`;

export const CardIcon = styled.img`
  width: 10.5rem;
  height: 10.6rem;
  border: 2px solid #93cb0a;
  padding: 0.5rem;

  @media (max-width: 1024px) {
    width: 6.5rem;
    height: 6.6rem;
    border: 2px solid #93cb0a;
    padding: 0.5rem;
  }
`;

export const CardContent = styled.div`
  padding-left: 1.8rem;
  width: 100%;
`;

export const Divider = styled.div`
  width: 3rem;
  border-top: 0.125rem solid #feffdf;
  margin-bottom: 2rem;
  align-self: flex-start;

  @media (max-width: 1024px) {
    margin-bottom: 1rem;
  }
`;

export const Description = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  color: #ffff;
  line-height: 1.5rem;
`;
