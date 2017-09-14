import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './store/create-store'

import Layout from './components/Layout'

class App extends Component {
  render() {
    return (
      <Provider store={ this.props.store }>
        <Layout />
      </Provider>
    )
  }
}

const store = createStore()
render(<App store={store} />, document.getElementById('root'))
