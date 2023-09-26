import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    word: '',
  }

  handleChange = event => {
    this.setState({word: event.target.value})
  }

  render() {
    const {word} = this.state
    return (
      <div className="container">
        <div className="info-con">
          <h1>
            Calculate the <br />
            letters you <br />
            enter
          </h1>
          <label htmlFor="text">Enter the phrase</label>
          <br />
          <input
            id="text"
            type="text"
            placeholder="Enter the Phrase"
            onChange={this.handleChange}
            value={word}
          />
          <br />
          <p className="length" onClick={this.getCount}>
            No.of letters: {word.length}
          </p>
        </div>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
