import React, { Component } from 'react'

export default class property extends Component {
  render() {
    return (
      <div>
        <property>{this.props.name}</property>
      </div>
    )
  }
}
