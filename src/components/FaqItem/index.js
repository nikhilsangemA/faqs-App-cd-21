import {Component} from 'react'

const plus = 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minus = 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  hideAndShowPara = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  render() {
    const {isActive} = this.state
    const {listOfDetails} = this.props
    const {questionText, answerText} = listOfDetails
    return (
      <li className="listOff">
        <div>
          <h1>{questionText}</h1>
          <button type="button" onClick={this.hideAndShowPara}>
            {isActive ? (
              <img src={minus} alt="minus" />
            ) : (
              <img src={plus} alt="plus" />
            )}
          </button>
        </div>
        {isActive && <p>{answerText}</p>}
      </li>
    )
  }
}

export default FaqItem
