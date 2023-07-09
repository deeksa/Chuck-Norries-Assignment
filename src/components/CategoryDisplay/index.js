import {Component} from 'react'
import './index.css'
// eslint-disable-next-line import/no-extraneous-dependencies
import Popup from 'reactjs-popup'
// eslint-disable-next-line import/no-extraneous-dependencies
// import 'reactjs-popup/dist/index.css'
import {IoMdClose} from 'react-icons/io'
import CategoryJoke from '../CategoryJoke'

class CategoryDisplay extends Component {
  state = {
    isCategorySelected: false,
    popUpDisplay: false,
  }

  // Category Text as per display

  getCategoryConvertedASPerDisplay = () => {
    const {each} = this.props
    const stringLength = each.length
    const initialLetter = each.slice(0, 1)
    const caps = initialLetter.toUpperCase()
    const restString = each.slice(1, stringLength)
    const result = caps + restString
    return result
  }

  onTapContainer = () => {
    this.setState({isCategorySelected: true, popUpDisplay: true})
  }

  onTapClose = () => {
    this.setState({isCategorySelected: false, popUpDisplay: false})
  }

  // display popup
  render() {
    const a = this.getCategoryConvertedASPerDisplay()
    const {each} = this.props
    const {isCategorySelected, popUpDisplay} = this.state
    console.log(isCategorySelected)
    const categoryDisplayContainerClassName = isCategorySelected
      ? 'categoryDisplayContainer2'
      : 'categoryDisplayContainer'
    return (
      <li>
        <button
          type="button"
          className="categoryButton"
          onClick={this.onTapContainer}
        >
          <div className={`${categoryDisplayContainerClassName}`}>
            <h1 className="category-display">{a}</h1>
            <p className="category-description-display">
              Unlimited Jokes On {a}
            </p>
          </div>
        </button>
        {popUpDisplay ? (
          <div className="test">
            <div className="test1">
              <div className="popup-container">
                <div className="popup-display">
                  <h1 className="popup-heading">{a}</h1>
                  <div>
                    <button
                      type="button"
                      data-testid="closeButton"
                      onClick={this.onTapClose}
                      className="close-button"
                    >
                      <IoMdClose size={20} color="white" />
                    </button>
                  </div>
                </div>
                <CategoryJoke each={each} />
              </div>
            </div>
          </div>
        ) : null}
      </li>
    )
  }
}
export default CategoryDisplay
