import React from 'react';
import { Button } from 'react-bootstrap';
import { Card, CardBody, CardFooter } from "react-simple-card";
import {
  updateTheCategory
} from '../redux-framework/actions';
import './index.css';
import { connect } from 'react-redux';
import ImageHeader from 'react-simple-card/lib/components/ImageHeader';

const imageSize = {
  width: '200px',
  padding: '25px'
};

class BookShelve extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }
  render() {
    return (
      <div>
        <div className="search-header">
          Search For Your Favorite Book:
          <input value={this.state.input} clasName="input-box" type="text" onChange={this.onChangeHandler} />
        </div>
        {this.props.list
          .filter((books) => this.state.input ? books.name.toLowerCase().includes(this.state.input.toLowerCase()) : books)
          .map((book, i) => (
            <Card key={i}>
              <ImageHeader className="book-image" imageSrc={book.image_uri} style={imageSize} />
              <CardBody>
                <div>{book.id}</div>
                <div>{book.name}</div>
                <div>{book.author}</div>
                <div className ="category">{book.category}</div>
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
    updateCategory: (book) => dispatch(updateTheCategory(book)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookShelve);