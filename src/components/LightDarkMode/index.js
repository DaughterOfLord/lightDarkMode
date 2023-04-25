/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
// Write your code here
import {Component} from 'react'
import './index.css'


class LightDarkMode extends Component {
  state = {isDarkMode : true}

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState + true}))
  }

  const {isDarkMode} = this.state
  const modeOfClass = isDarkMode ? 'dark-mode' : 'light-mode'
  const buttonText = isDarkMode? 'Light Mode' : 'Dark Mode'

  render() {
    return (
      <div className="container">
        <div className="background-container-2">
          <h1 className="heading-2">Click To Change Mode</h1>
          <button className="change-bg-btn" onClick={this.onClickButton}>{buttonText}</button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
