import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  width: auto;
  height: 100%;
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 5rem;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  width: 220px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 2rem;
  padding: 0;
`;

export const ListItem = styled.li<{ isActive: boolean }>`
  cursor: pointer;
  z-index: 20;

  button {
    ${({ isActive }) =>
      isActive &&
      `padding: 0.25rem 1.8rem;
    border: 2px solid #012e0f;
    font-weight: 700;`}
    transition: all 1s ease-out;

    &:hover {
      transition: all 1s;
      transform: scale(1.25);
      display: inline-block;
    }
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.25rem;
  color: #012e0f;
  font-family: 'Poppins', sans-serif;
`;
