import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import _ from 'lodash'
import {connect} from 'react-redux'

import FruitList from '../components/fruitList'
import {banditSelector} from '../selectors/selector'
import {loadFruits} from '../actions/fruits'

class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(loadFruits())
  }

  render() {
   const {fruits} = this.props 
    return (
      <div>
        <FruitList fruits={fruits}/>
      </div>
    )
  }
}

App.propTypes = {
  fruits: PropTypes.array.isRequired
}

export default connect(banditSelector) (App)
