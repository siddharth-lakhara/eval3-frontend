import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthorCard from './authorCard';

class BookCard extends Component {
  render() {
    return (
      <div>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51VNlzbfpXL._SX331_BO1,204,203,200_.jpg"
          alt="BookImage"
        />
        <div className="bookCard-name">{this.props.Name}</div>
        <div className="bookCard-name">{this.props.rating}</div>
        <div className="bookCard-name">{this.props.author}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  booksStorage: state.booksState.booksStorage,
});

export default connect(mapStateToProps, null)(BookCard);
