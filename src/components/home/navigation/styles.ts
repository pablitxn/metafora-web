import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  width: 100px;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 2rem;
  padding: 0;
`;

export const ListItem = styled.li`
  cursor: pointer;
  z-index: 20;

  .active {
    & button {
      padding: 0.25rem 2rem;
      border: 2px solid #012e0f;
      font-weight: 700;
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
