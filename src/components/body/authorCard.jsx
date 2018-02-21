import React, { Component } from 'react';
import { connect } from 'react-redux';
// import AuthorCard from './authorCard';

class AuthorCard extends Component {
  render() {
    return (
      this.props.booksStorage[this.props.author].map(elem => <AuthorCard author={elem.author} />)
    );
  }
}

const mapStateToProps = state => ({
  booksStorage: state.booksState.booksStorage,
});

export default connect(mapStateToProps, null)(AuthorCard);
