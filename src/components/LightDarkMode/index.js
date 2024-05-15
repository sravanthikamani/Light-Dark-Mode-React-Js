// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    darkMode: true,
  }

  changeMode = () => {
    this.setState(prevState => ({darkMode: !prevState.darkMode}))
  }
  render() {
    const {darkMode} = this.state
    const modeClassName = darkMode ? 'dark-mode' : 'light-mode'
    const buttonName = darkMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className={`container ${modeClassName}`}>
        <h1 className="heading">Click To Change the Mode</h1>
        <button className="button-style" onClick={this.changeMode}>
          {buttonName}
        </button>
      </div>
    )
  }
}

export default LightDarkMode
