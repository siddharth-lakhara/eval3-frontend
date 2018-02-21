import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthorCard from './authorCard';

class DisplayBooks extends Component {
  render() {
    const bookObject = this.props.booksStorage;
    return Object.keys(bookObject).map(authorProp => (
      <div>
        <div>
            Author: {authorProp}
        </div>
        <AuthorCard
          authorBooksArray={bookObject[authorProp]}
          author={authorProp}
        />
      </div>
    ));
  }
}

const mapStateToProps = state => ({
  booksStorage: state.booksState.booksStorage,
});

export default connect(mapStateToProps, null)(DisplayBooks);
