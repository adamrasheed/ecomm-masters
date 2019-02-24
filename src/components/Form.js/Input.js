import React, { Component } from "react"
import { GlobalContext } from "../Global/Context"
class Input extends Component {
  state = {}
  render() {
    const { label, name, type, required } = this.props
    return (
      <GlobalContext.Consumer>
        {context => (
          <>
            <label htmlFor={name} className="form__label">
              {label}
            </label>
            <input
              type={type ? type : `text`}
              name={name}
              className="form__input"
              value={context.state[name]}
              onChange={context.handleInput}
              required={required}
            />
          </>
        )}
      </GlobalContext.Consumer>
    )
  }
}

export default Input
