import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'

import style from './style'
import * as actions from '../../../store/action-creators'


class TopBar extends Component {
  componentDidMount() {
    this.setTitle('Home')
  }

  setTitle(title, delay = 0) {
    if (delay > 0) {
      this.props.dispatch(actions.setTitleDelayed(title, delay))
    } else {
      this.props.dispatch(actions.setTitle(title))
    }
  }

  render() {
    const items = [
      { key: 'home', active: true, name: 'Home', onClick: ()=>{this.setTitle('Home')} },
      { key: 'page1', name: 'Page 1', onClick: ()=>{this.setTitle('1')} },
      { key: 'page2', name: 'Page 2', onClick: ()=>{this.setTitle('2', 400)} },
    ]
    const styledItems = items.map(i => ({ ...i, style: style.menuItem }))

    return (
      <Menu items={styledItems} vertical style={style.menu} />
    )
  }
}

export default connect(
  state => ({
    title: state.title
  })
)(TopBar)
