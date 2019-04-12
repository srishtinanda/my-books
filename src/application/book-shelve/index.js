import React from 'react';
// import { Keys } from '../../components/button';
import { Button } from 'react-bootstrap';
import { Card, CardBody, CardFooter } from "react-simple-card";
import {
  updateTheCategory
} from '../redux-framework/actions';
// import { bookArray } from '../assets/booksData';
import { connect } from 'react-redux';
import ImageHeader from 'react-simple-card/lib/components/ImageHeader';
const imageSize = {
  height: '40px',
  width: '20px'
};

class BookShelve extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }
  render() {
    console.log(this.props.list, 'did it render again');
    return (
      <div>
        <input value={this.state.input} type="text" onChange={this.onChangeHandler} />
        {this.props.list
          .filter((books) => this.state.input ? books.name.toLowerCase().includes(this.state.input.toLowerCase()) : books)
          .map((book, i) => (
            <Card key={i}>
              <ImageHeader imageSrc={book.image_uri} style={imageSize} />
              <CardBody>
                <div>{book.id}</div>
                <div>{book.name}</div>
                <div>{book.author}</div>
                <div>{book.category}</div>
              </CardBody>
              <CardFooter>
                <Button onClick={(e) => this.addOrRemove(book, e)}> {book.category === null ? 'Add' : 'Remove'}
                </Button>
              </CardFooter>
            </Card>
          ))}
      </div>
    );
  }

  onChangeHandler = (e) => {
    this.setState({ input: e.target.value });
  }

  addOrRemove = (book) => {
    this.props.updateCategory(book);
  }
}

const mapStateToProps = state => {
  return {
    input: state.userInput.inputString,
    list: state.userInput.list
  };
}

const mapDispatchToProps = dispatch => {
  return {
    // inputValue: (item) => dispatch(userTypedInput(item)),
    updateCategory: (book) => dispatch(updateTheCategory(book)),
    // calculation: (item) => dispatch(calculateResult(item)),
    // clear: () => dispatch(clearInputString()),
    // delete: () => dispatch(deleteLastChar())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookShelve);