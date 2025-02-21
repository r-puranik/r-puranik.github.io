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
    </motion.div>
  </HeroContainer>
);

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