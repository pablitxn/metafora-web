import styled from 'styled-components';

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
`;
