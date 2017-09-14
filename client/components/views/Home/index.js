import React, { Component } from 'react'
import { connect } from 'react-redux'

import style from './style'

class Home extends Component {
  render() {
    return (
      <div style={style.container}>
        <h1>{this.props.title}</h1>
        Home Page
      </div>
    )
  }
}

export default connect(
  state => ({
    title: state.title.title
  })
)(Home)
