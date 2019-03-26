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
            <h2 className="form__title">
              Sign Up and Learn How to Create Custom Shopify Themes Today!
            </h2>
            <form
              ref={context.formRef}
              action=""
              className="form"
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
                />
                <label
                  htmlFor="inputAcceptsMarketing"
                  className="form__checkbox-label"
                >
                  I’d like to be notified when a Premium Course gets Launched
                </label>
                <div className="form__checkbox-box checkmark" />
              </div>
              <input
                type="submit"
                value="Send Me The Crash Course"
                className="button button--primary form__submit"
              />
              {context.state.formMsg && (
                <p className="small form-msg">{context.state.formMsg}</p>
              )}
              {context.state.formStatus === `success` && (
                <p className="small form-msg form-msg--success">
                  {context.state.inputName
                    ? `Thanks for signing up ${capitalize(
                        context.state.inputName
                      )}!`
                    : `Thanks for signing up!`}
                </p>
              )}
            </form>
            <p className="small form__disclaimer">We value your privacy</p>
          </div>
        )}
      </GlobalContext.Consumer>
    )
  }
}

export default Form
