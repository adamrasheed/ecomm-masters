import React from "react"

export const GlobalContext = React.createContext()

const formMessages = {
  succes: ``,
  noEmail: `Please enter an Email`,
}

class GlobalProvider extends React.Component {
  state = {
    signedUp: false,
    inputName: ``,
    inputEmail: ``,
    formStatus: null,
    formMsg: ``,
  }
  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value, formStatus: null, formMsg: `` })
  }

  handleSubmit = event => {
    const { target } = event
    const { inputName, inputEmail } = this.state
    event.preventDefault()
    const email = this.state.inputEmail
    if (!email) {
      this.setState({ formStatus: `error`, formMsg: formMessages.noEmail })
    }
    const packet = {
      firstName: inputName,
      email: inputEmail,
    }

    console.log(packet)
  }
  render() {
    return (
      <GlobalContext.Provider
        value={{
          state: this.state,
          handleInput: this.handleInputChange,
          handleSubmit: this.handleSubmit,
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}

export default GlobalProvider
