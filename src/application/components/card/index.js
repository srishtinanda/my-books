import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";

export class SimpleCard extends React.Component {
    render() {
      return (
        <Card>
    <CardHeader imageSrc="http://via.placeholder.com/600x250" />
    <CardBody>Body</CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>);
    }
}
