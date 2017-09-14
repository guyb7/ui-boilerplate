import React, { Component } from 'react'
import { connect } from 'react-redux'

import style from './style'

class Page1 extends Component {
  render() {
    return (
      <div style={style.container}>
        Page 1
      </div>
    )
  }
}

export default Page1
