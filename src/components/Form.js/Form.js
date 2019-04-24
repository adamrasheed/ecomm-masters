import React, { Component, createRef } from "react"
import Input from "./Input"
import { capitalize } from "../../utils/utils"
import { GlobalContext } from "../Global/Context"

class Form extends Component {
  state = {}
  ref = createRef()
  render() {
    return (
      <GlobalContext.Consumer>
        {context => (
          <div className="form-wrapper">
            <h2
              className={`form__title ${context.state.formStatus ===
                `success` && `was-submitted`}`}
            >
              Ready to add Shopify theme development to your resume?
              <br />
              Sign Up Today!
            </h2>
            <form
              ref={context.formRef}
              action=""
              className={`form ${context.state.formStatus === `success` &&
                `was-submitted`}`}
              onSubmit={context.handleSubmit}
            >
              <Input label="First Name" name="inputName" id="inputName" />
              <Input
                label="Email"
                name="inputEmail"
                id="inputEmail"
                type="email"
                required
                placeholder="westboss@raddev.com"
              />
              <div className="form__checkbox-wrapper">
                <input
                  type="checkbox"
                  className="form__checkbox"
                  name="inputAcceptsMarketing"
                  id="inputAcceptsMarketing"
                  checked={context.state.inputAcceptsMarketing}
                  onChange={context.handleInputChecbkox}
                />
                <label
                  htmlFor="inputAcceptsMarketing"
                  className="form__checkbox-label"
                >
                  I’d like to be notified when a premium course gets released
                </label>
                <div className="form__checkbox-box checkmark" />
              </div>
              <input
                type="submit"
                value="Send Me The Crash Course"
                className="button button--primary form__submit"
              />
            </form>
            {context.state.formMsg && (
              <p className="small form-msg">{context.state.formMsg}</p>
            )}
            {context.state.formStatus === `success` && (
              <p className="small form-msg form-msg--success">
                {context.state.inputName
                  ? `Thanks for signing up, ${capitalize(
                      context.state.inputName
                    )}!`
                  : `Thanks for signing up!`}
              </p>
            )}
            <p className="small form__disclaimer">We value your privacy</p>
          </div>
        )}
      </GlobalContext.Consumer>
    )
  }
}

export default Form
