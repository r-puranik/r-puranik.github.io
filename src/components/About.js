import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiCode, FiShield, FiCloud } from 'react-icons/fi';

const About = () => (
  <AboutSection>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <SectionTitle>About Me</SectionTitle>
      <BioText>
        Full-stack developer transitioning into AI/ML and Cybersecurity. 
        Passionate about building secure, intelligent cloud solutions.
        Currently exploring neural networks and ethical hacking.
      </BioText>
      
      <SkillsGrid>
        <SkillCard whileHover={{ scale: 1.05 }}>
          <FiCode size={40} />
          <h3>Full Stack Dev</h3>
          <p>React, Node.js, PostgreSQL</p>
        </SkillCard>

        <SkillCard whileHover={{ scale: 1.05 }}>
          <FiShield size={40} />
          <h3>Cyber Security</h3>
          <p>Pen Testing, Network Security</p>
        </SkillCard>

        <SkillCard whileHover={{ scale: 1.05 }}>
          <FiCloud size={40} />
          <h3>Cloud & DevOps</h3>
          <p>AWS, Docker, CI/CD</p>
        </SkillCard>
      </SkillsGrid>
    </motion.div>
  </AboutSection>
);

const AboutSection = styled.section`
  padding: 4rem 2rem;
  min-height: 100vh;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 2rem;
`;

const BioText = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  line-height: 1.6;
  margin-bottom: 3rem;
  opacity: 0.9;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled(motion.div)`
  background: ${({ theme }) => theme.body};
  border: 2px solid ${({ theme }) => theme.accent}50;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  transition: 0.3s ease;

  h3 {
    margin: 1rem 0;
    color: ${({ theme }) => theme.accent};
  }

  p {
    opacity: 0.8;
  }
`;

export default About;