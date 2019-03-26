import React, { Component } from "react"
import Pattern from "../../images/topography.svg"
import Form from "../Form.js/Form"
import { GlobalContext } from "../Global/Context"

class FormSection extends Component {
  state = {}
  render() {
    return (
      <GlobalContext.Consumer>
        {context => (
          <section className="form-section">
            <img src={Pattern} alt="" className="form-section__pattern" />
            <Form ref={context.formRef} />
          </section>
        )}
      </GlobalContext.Consumer>
    )
  }
}

export default FormSection
