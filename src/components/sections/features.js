import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Mission = () => (
  <Section id="mission">
    <StyledContainer>
      <Subtitle>Mission</Subtitle>
      <SectionTitle>Supporting your ambition.</SectionTitle>

      <MissionIntro>
        {" "}
        Our mission is to support the professional ambitions of underrepresented
        people pursuing careers in technology by increasing access to free and
        low-cost professional development opportunities.
      </MissionIntro>

      <MissionGrid>
        <FeatureItem>
          <FeatureTitle>Microgrant Program</FeatureTitle>
          <FeatureText>
            Is there a professional development related expense you need help
            covering? Apply to our upcoming microgrant program to receive
            financial support.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Amplify Opportunities</FeatureTitle>
          <FeatureText>
            When we hear about free or low-cost tech-related professional
            development opportunities we'll be sure to let you know!
          </FeatureText>
        </FeatureItem>
      </MissionGrid>
    </StyledContainer>
  </Section>
)

export default Mission

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const MissionIntro = styled.div`
  max-width: 760px;
  margin: 0 auto;
`

const MissionGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
