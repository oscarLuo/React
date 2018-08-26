import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';

export default class ComfirmeEmailMessage extends Component {
  render() {
    return (
        <Message info>
            <Message.Header>
                Please verify your email to unlock awesomeness
            </Message.Header>  
        </Message>
    )
  }
}
