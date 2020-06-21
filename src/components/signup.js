import React from "react"
import "./signup.css"
const FORM_ID = "1476169"

class Signup extends React.Component {
  render() {
    const form = {
      id: FORM_ID,
      buttonText: "Subscribe",
    }

    return (
      <form
        action={`https://app.convertkit.com/forms/${form.id}/subscriptions`}
        className="seva-form formkit-form"
        method="post"
        min-width="400 500 600 700 800"
        style={{
          boxShadow: "var(--form-shadow)",
          backgroundColor: "var(--bg)",
          borderRadius: "6px",
        }}
      >
        <div data-style="full">
          <div data-element="column" className="formkit-column">
            <ul
              className="formkit-alert formkit-alert-error"
              data-element="errors"
              data-group="alert"
            />

            <div data-element="fields" className="seva-fields formkit-fields">
              <div className="formkit-field">
                <input
                  className="formkit-input"
                  aria-label="Your first name"
                  name="fields[first_name]"
                  placeholder="Your first name"
                  type="text"
                  style={{
                    borderColor: "rgb(227, 227, 227)",
                    borderRadius: "4px",
                    color: "rgb(0, 0, 0)",
                    fontWeight: 400,
                  }}
                  required
                />{" "}
                <input
                  className="formkit-input"
                  aria-label="Your last name"
                  name="fields[last_name]"
                  placeholder="Your last name"
                  type="text"
                  style={{
                    borderColor: "rgb(227, 227, 227)",
                    borderRadius: "4px",
                    color: "rgb(0, 0, 0)",
                    fontWeight: 400,
                  }}
                  required
                />{" "}
              </div>
              <div>
                <input
                  className="formkit-input"
                  name="email_address"
                  aria-label="Your email"
                  placeholder="Your email"
                  required
                  type="email"
                  style={{
                    borderColor: "rgb(227, 227, 227)",
                    borderRadius: "4px",
                    color: "rgb(0, 0, 0)",
                    fontWeight: 400,
                  }}
                />
              </div>
            </div>
            <div className="formkit-checkbox">
              <div role="button" tabindex="0">
                <fieldset
                  data-group="checkboxes"
                  className="formkit-8024"
                  type="Custom"
                  order="3"
                  save_as="Tag"
                  group="field"
                >
                  <legend>I'm interested in...</legend>
                  <div
                    className="formkit-checkboxes"
                    data-element="tags-checkboxes"
                    data-group="checkbox"
                  >
                    <input
                      className="formkit-checkbox"
                      id="tag-3865118-1679535"
                      type="checkbox"
                      name="tags[]"
                      value="1679535"
                    />
                    <label for="tag-3865118-1679535">
                      applying to receive monetary support
                    </label>
                  </div>
                  <div
                    className="formkit-checkboxes"
                    data-element="tags-checkboxes"
                    data-group="checkbox"
                  >
                    <input
                      className="formkit-checkbox"
                      id="tag-3865118-1679537"
                      type="checkbox"
                      name="tags[]"
                      value="1679537"
                    />
                    <label for="tag-3865118-1679537">
                      learning more about providing monetary support
                    </label>
                  </div>
                  <div
                    className="formkit-checkboxes"
                    data-element="tags-checkboxes"
                    data-group="checkbox"
                  >
                    <input
                      className="formkit-checkbox"
                      id="tag-3865118-1679540"
                      type="checkbox"
                      name="tags[]"
                      value="1679540"
                    />
                    <label for="tag-3865118-1679540">
                      discovering free and low-cost professional development
                      opportunities
                    </label>
                  </div>
                </fieldset>
              </div>
            </div>
            {/*<button
              data-element="submit"
              className="formkit-submit formkit-submit"
            >
              <span>Subscribe</span>
            </button>*/}
            <button
              data-element="submit"
              className="formkit-submit formkit-submit"
              style={{
                backgroundColor: "#e0e1ff",
                borderRadius: "24px",
                color: "#2a2135",
                fontWeight: 700,
              }}
            >
              <div className="formkit-spinner" />
              <span>{form.buttonText}</span>
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default Signup
