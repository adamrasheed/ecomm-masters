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
          <>
            <form
              ref={context.formRef}
              action=""
              className="form"
              onSubmit={context.handleSubmit}
            >
              <Input label="First Name" name="inputName" />
              <Input label="Email" name="inputEmail" type="email" required />
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
          </>
        )}
      </GlobalContext.Consumer>
    )
  }
}

export default Form
