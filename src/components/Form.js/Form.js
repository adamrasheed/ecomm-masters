import React, { Component } from "react"
import Input from "./Input"
import { GlobalContext } from "../Global/Context"
class Form extends Component {
  state = {}
  render() {
    return (
      <GlobalContext.Consumer>
        {context => (
          <>
            <form action="" className="form" onSubmit={context.handleSubmit}>
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
            </form>
            <p className="small form__disclaimer">We value your privacy</p>
          </>
        )}
      </GlobalContext.Consumer>
    )
  }
}

export default Form
