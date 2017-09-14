import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

import style from './style'

const items = [
  { key: 'home', active: true, name: 'Home' },
  { key: 'page1', name: 'Page 1' },
  { key: 'page2', name: 'Page 2' },
]

const styledItems = items.map(i => ({ ...i, style: style.menuItem }))

class TopBar extends Component {
  render() {
    return (
      <Menu items={styledItems} vertical style={style.menu} />
    )
  }
}

export default TopBar
