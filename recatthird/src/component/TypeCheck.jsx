import React, { Component } from 'react'
import PropTypes from 'prop-types'



export default class TypeCheck extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.age}</h2>
        <h3>{this.props.city}</h3>
      </div>
    )
  }
}

TypeCheck.PropTypes = {
    name: PropTypes.string,
    age:PropTypes.number,
    city:PropTypes.string,
}