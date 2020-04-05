import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import {Link} from 'react-router-dom';

class Login extends Component {
  static async getInitialProps(){ //157lecture
    const mails = await factory.methods.getDeployedMails().call();

    return { mails: mails};
  }

  render(){
    return(
      <Layout>
        <Grid textAlign='center' style={{ height: '40vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
               귀하의 계정을 로그인해주세요
              </Header>
              <Form size='large'>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='아이디' />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='비밀번호'
                  type='password'
                />

                <Button color='teal' fluid size='large'>
                  로그인
                </Button>
              </Segment>
            </Form>
            <Message>
              처음이십니까?

              <Link to="/signUp"> 회원가입</Link>

            </Message>
            <Message>

                <Link to="/addMail">택배 등록</Link>

            </Message>
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default Login;
