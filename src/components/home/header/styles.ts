import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 1rem 3rem 0 3rem;
  width: 100%;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 2.5rem;
  color: #feffdf;

  a {
    pointer-events: none;
    font-weight: 500;
    text-decoration: none;
    color: #feffdf;
    font-size: 1.1rem;
  }
`;

export const Image = styled.img`
  height: 200px;
  width: 200px;
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
