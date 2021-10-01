import styled from 'styled-components';

export const About01Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const CardContent = styled.article<AnimatedElement>`
  width: 380px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10rem 0 0 50rem;
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
  font-size: 2.5rem;
  font-weight: bold;
  font-family: 'Josefin Sans', sans-serif;
`;

export const Button = styled.button`
  color: #93cb0a;
  font-weight: bold;
  border: 2px solid #93cb0a;
  padding: 0.5rem 2rem;
  background-color: transparent;
  font-size: 1.25rem;
  font-family: 'Poppins', sans-serif;
  align-self: flex-start;
`;
