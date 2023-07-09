/* eslint-disable jsx-a11y/no-distracting-elements */
import './index.css'
// To get Heading Text Styled
const ChuckNorriesHeading = () => (
  // eslint-disable-next-line jsx-a11y/no-distracting-elements
  // eslint-disable-next-line react/no-unknown-property
  <marquee behavior="alternate" direction="up" scrollamount="2" height="100">
    <div className="align-heading">
      <h1 className="style-heading">Chuck Norries</h1>
    </div>
  </marquee>
)
export default ChuckNorriesHeading
