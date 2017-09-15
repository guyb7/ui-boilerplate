import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/action-creators'

import style from './style'

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(actions.setTitle('Home'))
  }

  render() {
    return (
      <div style={style.container}>
        Home Page
      </div>
    )
  }
}

export default connect()(Home)
