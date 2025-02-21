import styled from 'styled-components';
import { motion } from 'framer-motion';

const Hero = () => (
  <HeroContainer>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Rishi Puranik</h1>
      <Subtitle>Software Engineer specializing in AI/ML & Cybersecurity</Subtitle>
      {/* <JumpTo>
        <NavLink href = "#projects">Projects</NavLink>
        <NavLink href = "#experience">Experience</NavLink>
        <NavLink href = "#education">Education</NavLink>
        <NavLink href = "#contact">Contact</NavLink>
      </JumpTo> */}
    </motion.div>
  </HeroContainer>
);

const JumpTo = styled.div`
    display: flex;
    gap: 1.5rem;
    margin-top: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 768pix) {
        gap: 1rem;
    }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.accent};
  font-weight: 500;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 2px solid ${({ theme }) => theme.accent}50;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.accent}15;
    transform: translateY(-2px);
  }
`;

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 2rem;
  
  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.accent};
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  opacity: 0.9;
  max-width: 600px;
`;

export default Hero;