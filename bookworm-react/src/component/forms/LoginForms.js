import React, { Component } from 'react';
import {Form, Button, Message} from 'semantic-ui-react';
import Valitator from 'validator';
import propTypes from 'prop-types'
import InlineError from '../messages/InlineError';
class LoginForms extends Component {
  state = {
      data: {
          email:'',
          password:''
      },
      loading: false,
      errors:{}
  }
  handleChange = e=> this.setState({
      data: {...this.state.data,[e.target.name]:e.target.value}
  })
  onSubmit = ()=>{
      const errors = this.validate(this.state.data);
      this.setState({errors});
      if (Object.keys(errors).length === 0) {
          this.setState({
            loading:true
          })
          this.props.submit(this.state.data)
            .catch(err => {
                this.setState({
                    errors : err.response.data.errors,
                    loading:false
                })
            })
      }
  }
  validate = (data)=>{
      const errors = {};
      if (!Valitator.isEmail(data.email)) errors.email = "Invalid Email Address";
      if (!data.password) {
        errors.password = "Password can't be empty";
      }
      return errors;
  }
  render() {
    const {data,errors,loading} = this.state;
    return (
        <Form size='large' onSubmit={this.onSubmit} loading={loading}>
            {errors.globals && <Message>
                <Message.Header>Something went wrong:</Message.Header>
                <p>{errors.globals}</p>
            </Message>}
            <Form.Field error={errors.email}>
                <Form.Input 
                    label='邮箱：'
                    type="email"
                    icon='user'
                    iconPosition='left'
                    id="email"
                    name="email"
                    placeholder="example@exmaple"
                    value={data.email}
                    onChange={this.handleChange}/>
            </Form.Field>
            {errors.email && <InlineError text={errors.email}/>}
            <Form.Field error={errors.password}>
                <Form.Input 
                    label='密码：'
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    icon='lock'
                    iconPosition='left'
                    value={data.password}
                    onChange={this.handleChange}/>
            </Form.Field>
            {errors.password && <InlineError text={errors.password}/>}
            <Button color='teal' fluid size='large'>登录</Button>
        </Form>
    );
  }
}
LoginForms.propTypes = {
    submit : propTypes.func.isRequired
}
export default LoginForms;
