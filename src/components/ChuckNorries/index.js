import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import CategoryDisplay from '../CategoryDisplay'
import ChuckNorriesHeading from '../ChuckNorriesHeading'

const apiStatusConstants = {
  loading: 'loading',
  completed: 'completed',
}

class ChuckNorries extends Component {
  state = {
    categoryList: [],
    apiStatus: '',
  }

  componentDidMount() {
    this.getCategories()
  }

  getCategories = async () => {
    this.setState({apiStatus: 'loading'})
    const url = 'https://api.chucknorris.io/jokes/categories'
    const responseData = await fetch(url)
    const categoriesListData = await responseData.json()
    this.setState({apiStatus: 'completed', categoryList: categoriesListData})
  }

  renderCategories = () => {
    const {categoryList} = this.state
    return (
      <div className="chuckNorriesContainer">
        <div className="align-heading">
          <ChuckNorriesHeading />
        </div>
        <ul className="displayList">
          {categoryList.map(e => (
            <CategoryDisplay each={e} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="white" height="150" width="80" />
    </div>
  )

  renderDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.renderLoadingView()

      case apiStatusConstants.completed:
        return this.renderCategories()

      default:
        return null
    }
  }

  // render CategoryDisplay
  render() {
    return <>{this.renderDetails()}</>
  }
}
export default ChuckNorries
