import React, { Component } from 'react';
import LoginContainer from '../containers/User/Login';
import Footer from '../components/Footer';
import { inject, observer } from 'mobx-react';
import Common from '../stores/Common/Common';
import NavContainer from '../components/Nav';
import MovileNavContainer from '../components/MobileNav';
import Auth from '../stores/Account/Auth';

@inject('Common', 'Auth')
@observer
class Login extends Component {
  componentDidMount = () => {
    const { Auth } = this.props;
    console.info('didmount');
    console.info(Auth.loggedUserId);
    console.info(Auth.token);
    if (localStorage.getItem('token')) {
      Auth.token = localStorage.getItem('token');
      Auth.loggedUserId = localStorage.getItem('userId');
      Auth.loggedUserType = localStorage.getItem('userType');
      alert('이미 로그인 중입니다.');
      window.location.href = '/';
    }
  };
  render() {
    return (
      <>
        {!this.props.Auth.token && (
          <>
            {Common.width &&
              (Common.width >= 767.98 ? (
                <NavContainer />
              ) : (
                <MovileNavContainer />
              ))}

            <LoginContainer />
            <Footer />
          </>
        )}
      </>
    );
  }
}

// Signup.propTypes = {};

export default Login;
