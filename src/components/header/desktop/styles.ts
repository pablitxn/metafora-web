import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 2rem 5rem;
  width: 100%;
  position: relative;
  z-index: 4;
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
    text-decoration: none;
    color: #feffdf;
    font-size: 1rem;
    line-height: 1.5rem;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: normal;
  }
`;

export const Logo = styled.img`
  .metafora {
    width: 12.25rem;
    height: 4.063rem;
  }

  .orq-futuros {
    z-index: 5;
    width: 12.25rem;
    height: 4.063rem;
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

  .orq-futuros {
    padding-left: 4.5rem;
  }
`;

export const Anchor = styled.a`
  text-decoration: none;
`;
