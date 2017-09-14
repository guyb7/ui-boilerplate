import React, { Component } from 'react'

import { Container } from 'semantic-ui-react'
import TopBar from './TopBar/'
import SideBar from './SideBar/'
import style from './style'

class Layout extends Component {
  render() {
    return (
      <div style={style.mainContainer}>
        <TopBar />
        <Container style={style.container}>
          <SideBar />
          <div style={style.content}>
            Main content
          </div>
        </Container>
      </div>
    )
  }
}

export default Layout
