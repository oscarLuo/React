import React, { Component } from 'react';
import { connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/auth'
import LoginForms from '../forms/LoginForms';
import { Container, Dropdown, Modal, Image, Menu } from 'semantic-ui-react';

class TopNavigation extends Component {
  submit = data => {
    debugger;
    return this.props.login(data).then(() => {
      this.props.history.push('/dashboard');
    })
  }
    
  render() {
    return ( 
      <div>
        <Menu stackable fixed='top' inverted>
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
              <Modal size='mini' trigger={<button className="ui primary button">登录</button>}>
                <Modal.Header>请输入您的用户名和密码：</Modal.Header>
                <Modal.Content image>
                  <LoginForms submit={this.submit}/>
                </Modal.Content>
              </Modal>
            </Menu.Item>
          </Container>
        </Menu>
      </div>
    )
  }
}

export default connect(null, { login })(TopNavigation);
