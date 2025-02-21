import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "AI Threat Detection System",
      description: "Machine learning model for network anomaly detection using TensorFlow and Python",
      tech: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn'],
      links: [
        { icon: <FiGithub />, url: 'https://github.com/yourusername/ai-threat-detection' },
        { icon: <FiExternalLink />, url: 'https://live-demo.com' }
      ]
    },
    {
      title: "Cloud Security Dashboard",
      description: "Real-time AWS security monitoring dashboard with React and Node.js",
      tech: ['React', 'Node.js', 'AWS', 'PostgreSQL'],
      links: [
        { icon: <FiGithub />, url: 'https://github.com/yourusername/cloud-security-dashboard' },
        { icon: <FiExternalLink />, url: 'https://cloud-demo.netlify.app' }
      ]
    },
    {
      title: "ML-Powered Firewall",
      description: "Next-generation firewall with machine learning capabilities",
      tech: ['C++', 'Python', 'Linux', 'MLlib'],
      links: [
        { icon: <FiGithub />, url: 'https://github.com/yourusername/ml-firewall' },
        { icon: <FiExternalLink />, url: 'https://firewall-demo.com' }
      ]
    }
  ];

  return (
    <ProjectsSection>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              links={project.links}
            />
          ))}
        </ProjectsGrid>
      </motion.div>
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  min-height: 100vh;
  background: ${({ theme }) => `${theme.body}99`};
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default Projects;