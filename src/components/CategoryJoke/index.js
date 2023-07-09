import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'

const apiStatusConstants = {
  loading: 'loading',
  completed: 'completed',
}

class CategoryJoke extends Component {
  state = {
    joke: '',
    apiStatus: '',
  }

  componentDidMount() {
    this.getJoke()
  }

  getJoke = async () => {
    this.setState({apiStatus: 'loading'})
    const {each} = this.props
    const url = `https://api.chucknorris.io/jokes/random?category=${each}`
    const responseData = await fetch(url)
    const jokeContent = await responseData.json()
    this.setState({apiStatus: 'completed', joke: jokeContent.value})
  }

  onTapNextButton = () => {
    this.getJoke()
  }

  // joke popup display

  render() {
    const {apiStatus, joke} = this.state
    return (
      <div className="joke-container">
        {apiStatus === apiStatusConstants.completed ? (
          <p className="joke-text">"{joke}"</p>
        ) : (
          <div className="loader-spinner">
            <Loader type="Oval" color="white" height="80" width="80" />
          </div>
        )}
        <button
          type="button"
          onClick={this.onTapNextButton}
          className="next-joke"
        >
          Next joke
        </button>
      </div>
    )
  }
}
export default CategoryJoke
