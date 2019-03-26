import React from "react"
import axios from "axios"
import { ConvertKitSubscribe } from "../Global/ConvertKit"
import { SubscriptionStatus } from "../../utils/handleSubscribe"
export const GlobalContext = React.createContext()

class GlobalProvider extends React.Component {
  state = {
    signedUp: false,
    inputName: ``,
    inputEmail: ``,
    formStatus: null,
    formMsg: ``,
    subscriber: {},
  }
  formRef = React.createRef()
  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value, formStatus: null, formMsg: `` })
  }

  scrollToForm = () => {
    const offset = this.formRef.current.offsetTop
    const adjustedOffset = offset - 32 - 16
    // window.scrollY()
    window.scrollTo({
      top: adjustedOffset,
      behavior: "smooth",
    })
    console.log(adjustedOffset)
    console.log("clicckeedd")
  }

  handleSubmit = event => {
    const { inputName, inputEmail } = this.state
    event.preventDefault()
    const packet = {
      first_name: inputName ? inputName : null,
      email: inputEmail,
      tags: `804695`,
    }

    axios
      .post(ConvertKitSubscribe, packet)
      .then(({ status, data }) => {
        const sucessfulSubmission = SubscriptionStatus(status)
        if (sucessfulSubmission) {
          const { email_address, first_name } = data.subscription.subscriber
          this.setState({
            signedUp: true,
            formStatus: `success`,
            subscriber: {
              email_address: email_address,
              first_name: first_name ? first_name : null,
            },
          })
        }
        console.log(this.state)
      })
      .catch(err => console.log(err))
  }

  handleHeroCta = event => {
    const form = this.formRef.current
    console.log("yoooo")
  }

  render() {
    return (
      <GlobalContext.Provider
        value={{
          state: this.state,
          handleInput: this.handleInputChange,
          handleSubmit: this.handleSubmit,
          scrollToForm: this.scrollToForm,
          formRef: this.formRef,
          handleHeroCta: this.handleHeroCta,
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}

export default GlobalProvider
