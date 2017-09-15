import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container, Icon } from 'semantic-ui-react'
import style from './style'

class Footer extends Component {
  render() {
    return (
      <Container style={style.container}>
        <div>
          <a href="mailto:contact@example.com" style={style.item}>
            <Icon name='mail outline' /> Email us
          </a>
          <a href="#" style={style.item}>
            <Icon name='twitter' size='large' />
          </a>
          <span style={style.item}>
            <Icon name='phone' /> Call +1 888.123.1234
          </span>
        </div>
        <div>
          <span style={style.item}>
            © Copyright 2018 Company Inc.
          </span>
          <a href="#" style={style.item}>
            Privacy Policy
          </a>
          <a href="#" style={style.item}>
            Terms
          </a>
          <span style={style.item}>
            <Icon name='bandcamp' size='large' />
          </span>
        </div>
      </Container>
    )
  }
}

export default Footer
