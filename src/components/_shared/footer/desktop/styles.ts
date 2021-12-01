import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background-color: transparent;
  border-top: 2px solid #ffff;
  position: absolute;
  bottom: 0;
  left: 0;
`;
export const TextBolded = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
`;
export const Text = styled.p`
  font-weight: normal;
  font-size: 0.9rem;
  color: #ffff;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 1rem;
  margin-right: 1rem;
  gap: 1rem;

  svg {
    color: white;
  }
`;

export const Anchor = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
