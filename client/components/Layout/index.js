import React, { Component } from 'react'
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom'

import { Container } from 'semantic-ui-react'
import LayoutSideNav from './LayoutSideNav/'
import LayoutNoNav from './LayoutNoNav/'
import Home from '../views/Home/'
import Page1 from '../views/Page1/'
import Page2 from '../views/Page2/'
import NotFound from '../views/NotFound/'
import style from './style'

class Layout extends Component {
  render() {
    const page = <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/page1" component={Page1} />
      <Route exact path="/page2" component={Page2} />
      <Route component={NotFound} />
    </Switch>

    let layout = <LayoutSideNav page={page} />
    switch (this.props.location.pathname) {
      case '/page2':
        layout = <LayoutNoNav page={page} />
        break
    }

    return layout
  }
}

export default withRouter(Layout)
