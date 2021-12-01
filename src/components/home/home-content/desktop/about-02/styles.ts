import styled from 'styled-components';
import { fadeIn } from '../styles';

export const About02Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  animation: 3s ${fadeIn} ease;

  @media (min-height: 1057px) {
    padding-top: 12rem;
  }
`;

export const Title = styled.h2`
  color: #93cb0a;
  font-weight: bold;
  font-family: 'Josefin Sans', sans-serif;
  margin-top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem 0 0;

  @media (max-width: 1024px) {
    margin-bottom: 1rem;
  }
`;

export const Card = styled.div`
  display: flex;
  width: 20rem;
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

export const Image = styled.img`
  position: relative;
  top: 0rem;
  right: 0rem;
  z-index: -1;

  @media (max-width: 1024px) {
    right: -0.5rem;
    width: 50%;
  }
`;

export const CardIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: flex-end;

  @media (max-width: 1024px) {
    width: 2rem;
    height: 2rem;

    padding: 0.5rem;
  }
`;

export const CardContent = styled.div`
  padding-left: 1.8rem;
  width: 100%;
  @media (min-height: 1057px) {
    width: 80%;
  }
`;

export const Divider = styled.div`
  width: 17rem;
  border-top: 0.125rem solid #feffdf;
  margin-bottom: 1rem;
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

export const Button = styled.button`
  position: relative;
  top: -5rem;
  left: 5rem;
  color: #012e0f;
  font-weight: bold;
  border: 2px solid #93cb0a;
  padding: 0.5rem 2rem;
  background-color: #93cb09;
  font-size: 1.25rem;
  font-family: 'Poppins', sans-serif;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`;
