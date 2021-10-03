import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: transparent;
  border-top: 2px solid #ffff;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const Text = styled.p`
  font-family: Josefin Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 0.9rem;
  line-height: 130.5%;
  display: flex;
  align-items: center;
  color: #ffff;
  padding: 0 2rem;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  height: 100%;
  padding: 0 1rem;
  margin-right: 1rem;
  gap: 1rem;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;

  svg {
    color: white;
  }
`;

export const Anchor = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
