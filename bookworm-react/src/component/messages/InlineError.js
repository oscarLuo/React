import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InlineError extends Component {
  render() {
    return (
      <div>
         <span style={{color:'#eb7679'}}>{this.props.text}</span>
      </div>
    )
  }
}
InlineError.propTypes = {
    text : PropTypes.string.isRequired
}