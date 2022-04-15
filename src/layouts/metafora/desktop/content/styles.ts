import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const HomeContentContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 5rem;
  height: 100%;
  align-items: center;
  position: relative;
  z-index: 2;

  & .whatsapp-icon {
    position: absolute;
    right: 3rem;
    bottom: 3rem;
  }

  @media (max-width: 1024px) {
    padding-right: 1rem;
    padding-top: 0;
  }
`;
