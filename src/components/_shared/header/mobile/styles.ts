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
`;

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  color: #feffdf;
  padding-top: 1rem;
  width: 100%;
`;

export const HeaderLogo = styled.img<IHeaderLogo>`
  ${({ isActive }) => {
    if (isActive) {
      return ``;
    }
    return ``;
  }}
`;
