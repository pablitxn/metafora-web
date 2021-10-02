import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 3rem;
  width: 100%;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 2.5rem;
  color: #feffdf;
  z-index: 2;

  & a {
    font-weight: 500;
    text-decoration: none;
    color: #feffdf;
    font-size: 1.1rem;
    cursor: pointer;
  }
`;

export const HeaderImage = styled.img`
  height: 150px;
  width: 250px;
`;

export const Divider = styled.div`
  width: 2px;
  height: 1.5rem;
  background-color: #feffdf;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;

  svg {
    cursor: pointer;
  }
`;
