import React from "react"
import { render } from "@testing-library/react"
import { PureHeader as Header } from "../header"
import { ThemeProvider } from "styled-components"
import theme from "../../../styles/theme"

describe(`Header`, () => {
  // Created using the query from Header.js
  const data = {
    file: {
      childImageSharp: {
        fluid: {
          src: "/static/f86dacab254d878c29343dea4ba80134/a4376/people.png",
          srcSet:
            "/static/f86dacab254d878c29343dea4ba80134/69781/people.png 250w,\n/static/f86dacab254d878c29343dea4ba80134/3fa08/people.png 500w,\n/static/f86dacab254d878c29343dea4ba80134/a4376/people.png 706w",
        },
      },
    },
  }

  const HeaderComponent = (
    <ThemeProvider theme={theme}>
      {" "}
      <Header data={data} />
    </ThemeProvider>
  )

  it(`renders siteTitle`, () => {
    const siteTitle = "Ambition Fund"
    const { getByText } = render(HeaderComponent)
    const title = getByText(siteTitle)
    expect(title).toBeInTheDocument()
  })

  it(`renders siteSubtitle`, () => {
    const siteSubtitle = "We’re here to support your vision."
    const { getByText } = render(HeaderComponent)
    const subtitle = getByText(siteSubtitle)
    expect(subtitle).toBeInTheDocument()
  })

  it(`renders CTA copy`, () => {
    const cta =
      "Sign up to receive updates and be the first to hear when we launch our microgrant program for tech-related professional development opportunities."
    const { getByText } = render(HeaderComponent)
    const ctaText = getByText(cta)
    expect(ctaText).toBeInTheDocument()
  })

  it(`renders CTA button`, () => {
    const cta = "Subscribe"
    const { getByText } = render(HeaderComponent)
    const ctaText = getByText(cta)
    expect(ctaText).toBeInTheDocument()
  })
})
