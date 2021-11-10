import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: transparent;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  flex-direction: row;
  color: #feffdf;
  padding-top: 1rem;
  width: 100%;
`;

export const HeaderLogo = styled.img``;
