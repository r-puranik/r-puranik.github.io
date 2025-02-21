import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiSend, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

const Contact = () => (
  <ContactSection>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <SectionTitle>Get in Touch</SectionTitle>
      
      <ContactGrid>
        <ContactForm
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring' }}
        >
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <TextArea placeholder="Message" rows="5" />
          <SubmitButton whileHover={{ scale: 1.05 }}>
            Send Message <FiSend />
          </SubmitButton>
        </ContactForm>

        <SocialLinks
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring' }}
        >
          <SocialItem href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FiLinkedin /> LinkedIn
          </SocialItem>
          <SocialItem href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FiGithub /> GitHub
          </SocialItem>
          <SocialItem href="mailto:your.email@example.com">
            <FiMail /> Email
          </SocialItem>
        </SocialLinks>
      </ContactGrid>
    </motion.div>
  </ContactSection>
);

// Styled Components
const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactSection = styled.section`
  padding: 4rem 2rem;
  min-height: 100vh;
  background: ${({ theme }) => `${theme.body}99`};
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.accent}50;
  border-radius: 8px;
  background: transparent;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent};
  }

  &::placeholder {
    color: ${({ theme }) => theme.text}80;
  }
`;

const TextArea = styled.textarea`
  ${Input.styles}
  resize: vertical;
  min-height: 150px;
`;

const SubmitButton = styled(motion.button)`
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.body};
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }

  svg {
    margin-left: 0.5rem;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-left: 2rem;
  border-left: 2px solid ${({ theme }) => theme.accent}20;

  @media (max-width: 768px) {
    border-left: none;
    padding-left: 0;
    padding-top: 2rem;
    border-top: 2px solid ${({ theme }) => theme.accent}20;
  }
`;

const SocialItem = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.text};
  font-size: 1.1rem;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.accent}15;
    transform: translateX(5px);
  }

  svg {
    color: ${({ theme }) => theme.accent};
    flex-shrink: 0;
  }
`;

export default Contact;