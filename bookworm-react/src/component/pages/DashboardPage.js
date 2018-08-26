import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ComfirmeEmailMessage from '../messages/ComfirmeEmailMessage';
import { allBooksSelector } from '../../reducer/books';
import AddBookCTA from '../cta/AddBookCTA';
import { fetchBooks } from '../../actions/books';
class DashboardPage extends Component {
  componentDidMount() {
    this.onInit(this.props);
  }
  onInit = (props) => props.fetchBooks();
  render() {
    return (
      <div>
        {!this.props.isComfirmed && <ComfirmeEmailMessage />}
        {this.props.books.length === 0 && <AddBookCTA />}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    isComfirmed : !!state.user.comfirmed,
    books: allBooksSelector(state)
  }
}
DashboardPage.protoTypes = {
  isComfirmed:PropTypes.bool.isRequired
}
export default connect(mapStateToProps, { fetchBooks })(DashboardPage) 