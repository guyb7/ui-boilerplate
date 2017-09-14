import React, { Component } from 'react'
import { Container, Icon, Menu } from 'semantic-ui-react'

import Logo from '../Logo'
import style from './style'

class TopBar extends Component {
  render() {
    return (
      <div style={style.container}>
        <Container>
          <Menu borderless style={style.menu}>
            <Menu.Item fitted>
              <Logo />
            </Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item name='menu' style={style.menuItem}>
                <Icon name='bars' />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Container>
      </div>
    )
  }
}

export default TopBar
