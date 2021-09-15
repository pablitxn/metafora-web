import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  /* padding: 0 3rem; */
  width: 100%;
  padding: 3%;
`;

export const Logo = styled.img`
  /* margin-top: 2.8125rem; */
  /* margin-left: 6.8125rem; */
  margin-left: 4%;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 2.5rem;
  color: #feffdf;
  margin-right: 7%;
  /* margin-top: 2%; */
  a {
    pointer-events: none;
    font-weight: 500;
    text-decoration: none;
    color: #feffdf;
    font-size: 1.1rem;
  }
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
