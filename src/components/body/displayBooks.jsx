import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookCard from './bookCard';

class DisplayBooks extends Component {
  render() {
    const bookObject = this.props.booksStorage;
    for (const authorProp in bookObject) {
      for (const bookElem in bookObject[authorProp]) {
        return (<BookCard
          Name={bookObject[authorProp][bookElem].Name}
          rating={bookObject[authorProp][bookElem].rating}
          // like
          // like={bookObject.authorProp[bookElem].like}
          author={authorProp}
        />
        );
      }
    }
  }
}

const mapStateToProps = state => ({
  booksStorage: state.booksState.booksStorage,
});

export default connect(mapStateToProps, null)(DisplayBooks);
