import React from "react"
import { render } from "@testing-library/react"

import Signup from "../signup"

describe(`Signup`, () => {
  const SignupComponent = <Signup />

  it(`renders first name input`, () => {
    const text = "Your first name"
    const { getByLabelText, getByPlaceholderText } = render(SignupComponent)
    const labelText = getByLabelText(text)
    const labelPlaceholder = getByPlaceholderText(text)

    expect(labelText).toBeInTheDocument()
    expect(labelPlaceholder).toBeInTheDocument()
  })

  it(`renders last name input`, () => {
    const text = "Your last name"
    const { getByLabelText, getByPlaceholderText } = render(SignupComponent)
    const labelText = getByLabelText(text)
    const labelPlaceholder = getByPlaceholderText(text)

    expect(labelText).toBeInTheDocument()
    expect(labelPlaceholder).toBeInTheDocument()
  })

  it(`renders email input`, () => {
    const text = "Your email"
    const { getByLabelText, getByPlaceholderText } = render(SignupComponent)
    const labelText = getByLabelText(text)
    const labelPlaceholder = getByPlaceholderText(text)

    expect(labelText).toBeInTheDocument()
    expect(labelPlaceholder).toBeInTheDocument()
  })

  it(`renders checkboxes for potential applicants`, () => {
    const { getByRole, getByText } = render(SignupComponent)
    const potentialApplicantCheck = getByRole("checkbox", {
      name: /applying to receive monetary support/i,
    })
    const potentialApplicationText = getByText(
      /applying to receive monetary support/i
    )

    expect(potentialApplicantCheck).toBeInTheDocument()
    expect(potentialApplicationText).toBeInTheDocument()
  })

  it(`renders checkboxes for potential donors`, () => {
    const { getByRole, getByText } = render(SignupComponent)
    const potentialDonorCheck = getByRole("checkbox", {
      name: /learning more about providing monetary support/i,
    })
    const potentialDonorText = getByText(
      /learning more about providing monetary support/i
    )

    expect(potentialDonorCheck).toBeInTheDocument()
    expect(potentialDonorText).toBeInTheDocument()
  })

  it(`renders checkboxes for opportunity newsletter`, () => {
    const { getByRole, getByText } = render(SignupComponent)
    const potentialOpportunitiesCheck = getByRole("checkbox", {
      name: /discovering free and low-cost professional development opportunities/i,
    })
    const potentialOpportunitiesText = getByText(
      /discovering free and low-cost professional development opportunities/i
    )

    expect(potentialOpportunitiesCheck).toBeInTheDocument()
    expect(potentialOpportunitiesText).toBeInTheDocument()
  })

  it(`renders checkboxes for volunteers`, () => {
    const { getByRole, getByText } = render(SignupComponent)
    const potentialVolunteersCheck = getByRole("checkbox", {
      name: /volunteering to support this initiative/i,
    })
    const potentialVolunteersText = getByText(
      /volunteering to support this initiative/i
    )

    expect(potentialVolunteersCheck).toBeInTheDocument()
    expect(potentialVolunteersText).toBeInTheDocument()
  })

  it(`renders CTA button`, () => {
    const cta = "Subscribe"
    const { getByText } = render(SignupComponent)
    const ctaText = getByText(cta)
    expect(ctaText).toBeInTheDocument()
  })
})
