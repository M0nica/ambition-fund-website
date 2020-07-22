import React from "react"
import * as Gatsby from "gatsby"
import { render } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import { useStaticQuery } from "gatsby"

import Navigation from "./navigation"
import theme from "../../../styles/theme"

describe(`Navigation`, () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => ({
      placeholderImage: {
        childImageSharp: {
          fluid: {
            src: "/static/b0ff4274c6c739b1582de8f5bba81744/774d6/logo.png",
            srcSet:
              "/static/b0ff4274c6c739b1582de8f5bba81744/7c0ed/logo.png 200w,\n/static/b0ff4274c6c739b1582de8f5bba81744/647de/logo.png 400w,\n/static/b0ff4274c6c739b1582de8f5bba81744/774d6/logo.png 512w",
            aspectRatio: "",
          },
        },
      },
    }))
  })

  const NavigationComponent = (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  )

  it(`renders siteTitle`, () => {
    global.window = { location: { pathname: "/" } }
    const siteTitle = "Ambition Fund"
    const { getByText } = render(NavigationComponent)
    const title = getByText(siteTitle)
    expect(title).toBeInTheDocument()
  })

  it(`renders mission link`, () => {
    const { getByText } = render(NavigationComponent)
    const missionLink = getByText("Mission")
    expect(missionLink).toBeInTheDocument()
  })

  it(`renders opportunities link`, () => {
    const opportunities = "Opportunities"
    const { getByText } = render(NavigationComponent)
    const opportunitiesLink = getByText(opportunities)
    expect(opportunitiesLink).toBeInTheDocument()
  })
})
