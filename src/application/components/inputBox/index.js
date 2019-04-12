import React from 'react';
import {TextInput } from 'react';

export class TextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
        <TextInput
          placeholder={this.props.placeholder}
          editable={false}
          onChangeText={(text) => this.setState({text})}
          value={this.props.value}
        />
    );
  }
}
