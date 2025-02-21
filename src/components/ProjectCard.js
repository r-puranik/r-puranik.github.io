import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, tech, links }) => (
  <Card 
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h3>{title}</h3>
    <Description>{description}</Description>
    <TechStack>
      {tech.map((item, index) => (
        <TechPill key={index}>{item}</TechPill>
      ))}
    </TechStack>
    <LinksContainer>
      {links.map((link, index) => (
        <IconLink 
          key={index} 
          href={link.url} 
          target="_blank" 
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {link.icon}
        </IconLink>
      ))}
    </LinksContainer>
  </Card>
);

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.body};
  border: 2px solid ${({ theme }) => theme.accent};
  border-radius: 15px;
  padding: 2rem;
  margin: 1rem;
  box-shadow: 0 10px 30px -10px rgba(0,0,0,0.2);
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  h3 {
    color: ${({ theme }) => theme.accent};
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  flex-grow: 1;
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechPill = styled.span`
  background: ${({ theme }) => theme.accent}22;
  color: ${({ theme }) => theme.accent};
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const IconLink = styled(motion.a)`
  color: ${({ theme }) => theme.accent};
  transition: 0.3s ease;
  
  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export default ProjectCard;