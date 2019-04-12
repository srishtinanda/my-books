import { Button } from 'react';
import React from 'react';

export class Keys extends React.Component {
    render() {
      return (
        <Button 
          text={this.props.text}
          raised={true}
          primary={true}
          onPress={this.props.onAction}
        />);
    }
}
