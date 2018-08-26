import React, { Component } from 'react'
import { Dropdown, Form } from 'semantic-ui-react';
import axios from 'axios';
class SearchBookForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: '',
            loading: false,
            options: [],
            books: {}
        }
    }

    onSearchChange = (e, data) => {
        clearTimeout(this.timer);
        this.setState({
            query :data.searchQuery
        });
        this.timer = setTimeout(this.fetchOptions,1000);
    }

    fetchOptions = () => {
        if (!this.state.query) return;
        this.setState({
            loading: true
        })
        axios.get(`/api/books/search?=${this.state.query}`)
             .then(res => res.data.books)
             .then(books => {
                 const options = [];
                 const booksHash = {};
                 books.forEach(book => {
                    booksHash[book.goodreadsId] = book;
                    options.push({
                        key: book.goodreadsId,
                        value: book.goodreadsId,
                        text: book.title
                    })
                 });
                 this.setState({
                     loading: false,
                     options,
                     books: booksHash
                 })
             })
    }
    onChange = (e, data) => {
        this.setState({
            query: data.value
        })
        this.props.onBookSelect(this.state.books[data.value]);
    }
  render() {
    return (
      <Form>
          <Dropdown 
            search
            fluid
            placeholder="Search for a book by title"
            value={this.state.query}
            onSearchChange={this.onSearchChange.bind(this)}
            options={this.state.options}
            loading={this.state.loading}
            onChange={this.onChange.bind(this)}
          />
      </Form>
    )
  }
}
export default SearchBookForm