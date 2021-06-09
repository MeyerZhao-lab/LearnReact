
// const Header = (props) => {
//   return (
//     <header>
//       <h1>Task Tracker {props.title}</h1>
//     </header>
//   )
// }

import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  const onClick = () => {
    console.log('object2021');
  }

  return (
    <header>
      <h1 style={{ color: 'red'}}>Task Tracker {title}</h1>
      <Button color='green' text="Hello" onClick={onClick} />
    </header>
  )
}




Header.defaultProps = {
  title: "Task Tracker",
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
