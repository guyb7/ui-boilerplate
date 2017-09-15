import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'
import * as actions from '../../../store/action-creators'

import { Menu } from 'semantic-ui-react'
import style from './style'

class TopBar extends Component {
  setTitle(title, delay = 0) {
    if (delay > 0) {
      this.props.dispatch(actions.setTitleDelayed(title, delay))
    } else {
      this.props.dispatch(actions.setTitle(title))
    }
  }

  changePage(page, replace = false) {
    if (replace) {
      this.props.history.replace(page)
    } else {
      this.props.history.push(page)
    }
  }

  getItems() {
    let items = []
    switch (this.props.location.pathname) {
      case '/page1':
        items = [
          { key: 'home', name: 'Back Home', onClick: () => {this.changePage('/', true)} }
        ]
        break
      case '/page2':
        items = [
          { key: 'home', name: 'Back Home', onClick: () => {this.changePage('/', true)} }
        ]
        break
      default:
        items = [
        { key: 'empty', disabled: true, name: '' },
        { key: 'home', active: true, name: 'Home', onClick: () => {this.changePage('/')} },
        { key: 'page1', name: 'Page 1', onClick: () => {this.changePage('/page1')} },
        { key: 'page2', name: 'Page 2', onClick: () => {this.changePage('/page2')} }
      ]
    }
    const styledItems = items.map(i => ({
      ...i,
      style: _.defaults(i.active ? style.menuItemActive : {}, style.menuItem)
    }))
    styledItems[0].style = _.defaults(style.mainMenuItem, style.menuItem)
    return styledItems
  }

  render() {
    return (
      <Menu items={this.getItems()} vertical style={style.menu} />
    )
  }
}

export default withRouter(connect()(TopBar))
