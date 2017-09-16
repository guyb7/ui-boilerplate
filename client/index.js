import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import createStore from './store/create-store'
import 'semantic-ui-css/semantic.min.css'

import { Container } from 'semantic-ui-react'
import TopBar from './components/layout/TopBar/'
import SideBar from './components/layout/SideBar/'
import PageHeader from './components/layout/PageHeader/'
import Footer from './components/layout/Footer/'
import Home from './components/views/Home/'
import Page1 from './components/views/Page1/'
import Page2 from './components/views/Page2/'
import style from './style'

const baseUrl = '/app'

class App extends Component {
  isLoggedIn() {
    return true
  }

  isLoggedOut() {
    return false
  }

  render() {
    return (
      <Provider store={ this.props.store }>
        <Router basename={baseUrl}>
          <div style={style.container}>
          {
            this.isLoggedIn() &&
            <div style={style.container}>
              <TopBar />
              <Container style={style.contentContainer}>
                <SideBar />
                <div style={style.content}>
                  <PageHeader />
                  <Route exact path="/" component={Home} />
                  <Route exact path="/page1" component={Page1} />
                  <Route exact path="/page2" component={Page2} />
                </div>
              </Container>
              <Footer />
            </div>
          }
          {
            this.isLoggedOut() &&
            <div style={style.container}>
              Login Screen
            </div>
          }
          </div>
        </Router>
      </Provider>
    )
  }
}

const store = createStore()
render(<App store={store} />, document.getElementById('root'))
