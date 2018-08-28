import React, { Component } from 'react';
import { connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { login, logout } from '../../actions/auth'
import LoginForms from '../forms/LoginForms';
import { Container, Dropdown, Modal, Image, Menu, Transition } from 'semantic-ui-react';

class TopNavigation extends Component {
  submit = data => {
    return this.props.login(data).then(() => {
      this.props.history.push('/');
    })
  }
    
  render() {
    return ( 
      <div>
        <Menu color="grey" stackable fixed='top' inverted>
          <Container>
            <Menu.Item header as={ Link } to='/'>
              <Image size='mini' src='../../favicon.ico' style={{ marginRight: '1.5em' }} />
              蜀唯文化
            </Menu.Item>
            <Menu.Item as='a'>主页</Menu.Item>

            <Dropdown item simple text='Dropdown'>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>
                  <i className='dropdown icon' />
                  <span className='text'>Submenu</span>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item as='a' position='right'>
            {this.props.isAuthenticated ? <button className="ui primary button" onClick={()=>this.props.logout()}>退出</button> :  
              <Transition animation='jiggle' ><Modal size='tiny' trigger={<button className="ui primary button">登录</button>}>
                <Modal.Header>请输入您的用户名和密码：</Modal.Header>
                <Modal.Content>
                    <LoginForms submit={this.submit}/>
                </Modal.Content>
              </Modal>
              </Transition>}
            </Menu.Item>
          </Container>
        </Menu>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated : !!state.user.token
  }
}
export default connect(mapStateToProps, { login, logout })(TopNavigation);
