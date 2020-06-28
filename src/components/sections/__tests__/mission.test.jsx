import React from "react"
import { render } from "@testing-library/react"
import Mission from "../mission"
import { ThemeProvider } from "styled-components"
import theme from "../../../styles/theme"

describe(`Mission`, () => {
  const MissionComponent = (
    <ThemeProvider theme={theme}>
      <Mission />
    </ThemeProvider>
  )

  it("render section subtitle", () => {
    const text = "Mission"
    const { getByText } = render(MissionComponent)
    const subtitle = getByText(text)
    expect(subtitle).toBeInTheDocument()
  })

  it("renders mission tagline", () => {
    const text = "Supporting your professional ambitions."
    const { getByText } = render(MissionComponent)
    const tagline = getByText(text)
    expect(tagline).toBeInTheDocument()
  })

  it("renders core mission copy", () => {
    const text =
      "Our mission is to increase access to free and low-cost educational and professional development opportunities within the technology industry. In particular, we are focused on supporting individuals who are pursuing careers in technology and identify as belonging to a community that has traditionally been underrepresented within the technology industry."
    const { getByText } = render(MissionComponent)
    const mission = getByText(text)
    expect(mission).toBeInTheDocument()
  })

  it("renders 'Microgrant Program' featureTitle`", () => {
    const text = "Microgrant Program"
    const { getByText } = render(MissionComponent)
    const featureTitle = getByText(text)
    expect(featureTitle).toBeInTheDocument()
  })

  it("renders 'Amplify Opportunities' featureTitle", () => {
    const text = "Amplify Opportunities"
    const { getByText } = render(MissionComponent)
    const featureTitle = getByText(text)
    expect(featureTitle).toBeInTheDocument()
  })
})
