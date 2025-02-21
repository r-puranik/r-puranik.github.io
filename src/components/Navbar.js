import styled from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi';

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.accent};
  border: none;
  padding: 0.8rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;

  &:hover {
    transform: rotate(15deg);
  }
`;

const Navbar = ({ toggleTheme, theme }) => (
  <Nav>
    <ToggleButton onClick={toggleTheme}>
      {theme === 'light' ? <FiMoon /> : <FiSun />}
    </ToggleButton>
  </Nav>
);

const Nav = styled.nav`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 1000;
`;

export default Navbar;