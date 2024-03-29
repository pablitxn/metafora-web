import styled from 'styled-components';

export const HomeLayoutContainer = styled.div`
  background-color: #feffdf;
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 100%;
    background-color: #012e0f;
    z-index: 1;
  }
`;
