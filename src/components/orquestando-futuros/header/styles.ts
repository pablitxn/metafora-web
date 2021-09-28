import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 2.75rem;
`;

export const Logo = styled.img`
  width: 11.375rem;
  height: 4.3125rem;
  margin-left: 3.75rem;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 2.5rem;
  color: #feffdf;
  margin-right: 6rem;
  a {
    pointer-events: none;
    font-weight: 500;
    text-decoration: none;
    color: #feffdf;
    font-size: 1.1rem;
  }
`;

export const Divider = styled.div`
  width: 0.125rem;
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
