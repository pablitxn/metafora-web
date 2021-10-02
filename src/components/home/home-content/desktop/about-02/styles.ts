import styled from 'styled-components';

export const About02Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 50rem;
`;

export const CardContent = styled.div`
  padding-left: 1.8rem;
`;

export const Divider = styled.div`
  width: 3rem;
  border-top: 0.125rem solid #feffdf;
  margin-bottom: 2rem;
  align-self: flex-start;
`;

export const Title = styled.h2`
  color: #93cb0a;
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Josefin Sans', sans-serif;
  margin-top: 0;
`;

export const Card = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  flex-direction: row;
  align-items: flex-start;
`;

export const CardIcon = styled.img`
  width: 10.5rem;
  height: 10.6rem;
  border: 2px solid #93cb0a;
  padding: 0.5rem;
`;
export const Description = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  color: #ffff;
  font-size: 1.25rem;
  line-height: 1.5rem;
`;
