import React, { Component } from 'react'
import { render } from 'react-dom'

import Layout from './components/Layout'

class App extends Component {
  render() {
    return <Layout />
  }
}

render(<App />, document.getElementById('root'))
