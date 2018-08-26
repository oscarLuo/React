import React, { Component } from 'react';
import { connect} from 'react-redux';
import { Menu, Dropdown, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import gravatarUrl from 'gravatar-url';
import { logout } from '../../actions/auth'
import { allBooksSelector } from '../../reducer/books';

class TopNavigation extends Component {
  render() {
    return (
      <Menu secondary pointing>
          <Menu.Item as={ Link } to='/dashboard'>Dashboard</Menu.Item>
          {this.props.hasBooks && <Menu.Item as={ Link } to='/books/new'>Add new Books</Menu.Item>}
          <Menu.Menu position='right'>
            <Dropdown trigger={<Image avatar src={ gravatarUrl("oscar.luo@sap.com") } />}>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => this.props.logout()}>Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
      </Menu>  
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    hasBooks: allBooksSelector(state).length > 0
  }
}
export default connect(mapStateToProps, { logout })(TopNavigation);
