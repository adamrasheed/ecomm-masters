import React, { Component } from "react"
import { GlobalContext } from "../Global/Context"
class Input extends Component {
  state = {}
  render() {
    const { label, name, id, type, required, placeholder } = this.props
    return (
      <GlobalContext.Consumer>
        {context => (
          <>
            <label htmlFor={id} className="form__label">
              {label}
              {required && `*`}
            </label>
            <input
              type={type ? type : `text`}
              name={name}
              id={id}
              className={`form__input${name ? ` form__input--${name}` : ``}`}
              placeholder={placeholder}
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
