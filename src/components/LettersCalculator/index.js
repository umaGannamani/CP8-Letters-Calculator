// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputElement: ''}
  onChangeInputElement = event => {
    const value = event.target.value
    this.setState({inputElement: value})
  }
  render() {
    const {inputElement} = this.state
    return (
      <div className="bg-container">
        <div className="letters-calculate-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-container">
              <label className="label" htmlFor="pharseText">
                Enter the phrase
              </label>
              <input
                className="letters-input"
                id="pharseText"
                onChange={this.onChangeInputElement}
                placeholder="Enter the phrase"
                type="text"
                value={inputElement}
              />
            </div>
            <p className="letters-count">
              No.of letters: {inputElement.length}
            </p>
          </div>
          <img
            alt="letters calculator"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            className="image"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
