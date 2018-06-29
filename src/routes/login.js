import React from 'react';
import styles from './login.css'
import { connect } from 'dva';
import { Form, Icon, Input, Checkbox } from 'antd';
import { message, Button } from 'antd';
const FormItem = Form.Item;
const error = () => {
  message.error('密码错误');
}
class Login extends React.Component{
    handleSubmit = (e) => {
        const {dispatch} = this.props;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                dispatch({type: 'login/userlogin', payload: {values}}).then((res) => {if(!res.code){error()}})
            }
        });
      }
      render() {
          const { getFieldDecorator } = this.props.form;
          return (
              <div id="loginbox" className={styles.loginbox}>
                  <Form onSubmit={this.handleSubmit} className="login-form" width="300px">
                      <FormItem>
                          {getFieldDecorator('userName', {
                              rules: [{ required: true, message: 'Please input your username!' }],
                          })(
                             <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                          )}
                      </FormItem>
                      <FormItem>
                          {getFieldDecorator('password', {
                              rules: [{ required: true, message: 'Please input your Password!' }],
                          })(
                              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                          )}
                      </FormItem>
                      <FormItem>
                          {getFieldDecorator('remember', {
                              valuePropName: 'checked',
                              initialValue: true,
                          })(
                            <Checkbox>Remember me</Checkbox>
                          )}
                          <a className="login-form-forgot" href="">Forgot password</a>
                          <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                          </Button>
                          Or <a href="">register now!</a>
                      </FormItem>
                  </Form>
              </div>
        );
    }
}
const LoginForm = Form.create()(Login);
export default connect()(LoginForm);
