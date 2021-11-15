import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'


const Posts = () => (
  <Layout title="Posts">
    <Container>
     

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
        Realized Projects
        </Heading>
        <Paragraph>
        
        The courses at my engineering school allowed me to learn several
         tools that encourage me to pursue a career in full stack development:
        Out of my academic training I am a dynamic,
         motivated person always seeks to improve my competence that's why I participated in several competitions as a web developer (OSTx, second prize) and 
        I worked freelance for a year where I created websites for doctors.         
        </Paragraph>
        <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <BioSection>
          <BioYear>Stock management System :</BioYear>
          <Paragraph>
          • Elaborated a distributed system integrating multiple technologies
            to communicate between them: Quarkus, SpringBoot, React, RabbitMQ, MongoDB, ELK.
        </Paragraph>
          <Paragraph>
          • created a web application to manage stocks.
            </Paragraph>
            
        </BioSection>
        <BioSection>
          <BioYear>Eniso Smart Park:</BioYear>
          <Paragraph>
          • created a mobile application that helps the user to recognize empty
            spaces in advance.
            </Paragraph>
            <Paragraph>
          • conceived an IoT system to recognize authorized personnel using
            facial recognition and Arduino.
        </Paragraph>
        </BioSection>
        <BioSection>
          <BioYear>School Management System:</BioYear>
            <Paragraph>
            Web App Application, help administration , students and teachers
            in their daily tasks giving assignments,grading students ,managing
            teachers contracts etc . Built withlaravel ,bootstrap and PWA
        </Paragraph>
        </BioSection>
        <BioSection>
          <BioYear>Car Care:</BioYear>
          <Paragraph>
          • created a mobile application that helps users to manage their cars.
            </Paragraph>
            <Paragraph>
          • conceived a model to make car diagnosis easier and fusible by users.
        </Paragraph>
        </BioSection>
        
      </Section>
     
      </Section>
    </Container>
  </Layout>
)

export default Posts
