import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'
import Paragraph from '../components/paragraph'
import { GridItem } from '../components/grid-item'


import thumbDocker from '../public/images/contents/docker.png'
import thumbReact from '../public/images/contents/react.png'
import thumbNode from '../public/images/contents/node.png'
import thumbLarvel from '../public/images/contents/Larvel.png'
import thumbMongo from '../public/images/contents/mongo .png'
import thumbSpring from '../public/images/contents/spring.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Expirence
        </Heading>
        <BioSection>
          <BioYear> Jul 2021- sep 2021</BioYear>
          Internship at 4C Eniso: Full Stack Engineer 
          <Paragraph>• Developed a responsive web application as an Online Exam System to
            Improve Student Learning Quality.
            </Paragraph>
            <Paragraph>
            • Conceived multiple solutions to examine student.
          </Paragraph>
        </BioSection>
        <BioSection>
          <BioYear> Jul 2021- sep 2021</BioYear>
          Internship at 4C Eniso: Full Stack Engineer 
          <Paragraph>• Developed a responsive web application as an Online Exam System to
            Improve Student Learning Quality.
            </Paragraph>
            <Paragraph>
            • Conceived multiple solutions to examine student.
          </Paragraph>
        </BioSection>
        <BioSection>
          <BioYear> Jul 2021- sep 2021</BioYear>
          Internship at 4C Eniso: Full Stack Engineer 
          <Paragraph>• Developed a responsive web application as an Online Exam System to
            Improve Student Learning Quality.
            </Paragraph>
            <Paragraph>
            • Conceived multiple solutions to examine student.
          </Paragraph>
        </BioSection>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <Paragraph>
          while throughout my expirences 
        </Paragraph>
        
      </Section>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Laravel"
            thumbnail={thumbLarvel}
            href=""
            
          />
          <GridItem
            title="Spring Boot"
            thumbnail={thumbSpring}
            href=""
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          
          <GridItem
            title="MongoDB"
            thumbnail={thumbMongo}
            href=""
          />
          <GridItem
            title="React"
            thumbnail={thumbReact}
            href=""
          />
          
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Docker"
            thumbnail={thumbDocker}
            href=""
          />
          <GridItem
            title="Node Js"
            thumbnail={thumbNode}
            href="https://blog.inkdrop.app/i-stopped-setting-a-financial-goal-for-my-saas-a92c3db65506"
          />
          
          
        </SimpleGrid>
      </Section>


    </Container>
  </Layout>
)

export default Works
