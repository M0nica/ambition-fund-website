import React from "react"
import styled from "styled-components"

import { Container } from "../global"

const Footer = () => (
  <FooterWrapper id="footer">
    <FooterColumnContainer>
      <FooterColumn>
        <span>Contact Us</span>
        <ul>
          <li>
            {" "}
            Email -{" "}
            <StyledLink href="mailto:info@ambitionfund.org">
              info@ambitionfund.org
            </StyledLink>
          </li>
        </ul>
        <ul>
          <li>
            Twitter -{" "}
            <StyledLink href="https://twitter.com/AmbitionFund">
              @ambitionfund
            </StyledLink>
          </li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        {" "}
        <span>Community</span>
        <ul>
          <li>
            <StyledLink href="https://github.com/M0nica/ambition-fund-website">
              GitHub
            </StyledLink>
          </li>
          <li>
            <StyledLink href="https://github.com/M0nica/ambition-fund-website/issues">
              Help Wanted
            </StyledLink>
          </li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        {" "}
        <span>Donate</span>
        <ul>
          <li>
            <StyledLink href="https://opencollective.com/ambition-fund">
              Open Collective
            </StyledLink>
          </li>
        </ul>
      </FooterColumn>
    </FooterColumnContainer>
    <BrandContainer>
      <Logo>Ambition Fund</Logo>
    </BrandContainer>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: white;
  margin: 80px 0 0;
  padding: 0 0 80px;
`

const StyledLink = styled.a`
  color: ${props => props.theme.color.primary};
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
const Logo = styled.div`
  font-family: ${props => props.theme.font.extrabold};
  ${props => props.theme.font_size.regular};
  color: ${props => props.theme.color.black.regular};
  text-decoration: none;
  letter-spacing: 1px;
  margin: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 9;
  text-decoration: none;
  outline: 0px;
`

const BrandContainer = styled(Container)`
  position: relative;
  padding-top: 48px;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${props => props.theme.screen.sm}) {
  }
`
const FooterColumnContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 32px;
  justify-content: start;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
`
const FooterColumn = styled.div`
  span {
    font-size: 16px;
    font-family: ${props => props.theme.font.bold};
    color: ${props => props.theme.color.primary};
  }
  ul {
    list-style: none;
    margin: 16px 0;
    padding: 0;
    color: ${props => props.theme.color.black.regular};
    li {
      margin-bottom: 12px;
      font-family: ${props => props.theme.font.normal};
      font-size: 15px;
    }
  }
`

export default Footer
