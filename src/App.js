// import logo from './logo.svg';

// function App() {
//   return <div>Test4[D]</div>;
// }

// export default App;

import React from 'react';
import {
  Home,
  Signup,
  Login,
  Forgotten,
  Notice,
  Community,
  Tutor,
  Tutee,
  Chatting,
  MyPage,
  MyClass,
  AdminHome,
  AdminMain,
  AdminCommunity,
} from './pages';
import { BrowserRouter, Route } from 'react-router-dom';
import { inject, observer, Provider } from 'mobx-react';
import stores from './stores';
import './stores/index';
import './App.css';
import Common from './stores/Common/Common';
// import Auth from './stores/Account/Auth';
import NavContainer from './components/Nav';
import MovileNavContainer from './components/MobileNav';
import Auth from './stores/Account/Auth';

// @inject('Common')
@observer
class App extends React.Component {
  state = {
    width: null,
  };
  async componentDidMount() {
    console.info('diddiddid');
    window.addEventListener('resize', this.updateDimensions);
    console.info(localStorage.getItem('token'));
    console.info(localStorage.getItem('userId'));
    console.info(localStorage.getItem('userType'));
    // this.setState({ ...this.state, width: window.innerWidth - 10 });
    console.info(Auth);
    Common.width = window.innerWidth - 10;
    if (localStorage.getItem('token')) {
      Auth.token = localStorage.getItem('token');
      Auth.loggedUserId = localStorage.getItem('userId');
      Auth.loggedUserType = localStorage.getItem('userType');
    }
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
  updateDimensions = () => {
    // this.setState({ ...this.state, width: window.innerWidth - 10 });
    Common.width = window.innerWidth - 10;
  };

  render() {
    return (
      <div>
        <Provider {...stores} Common={Common}>
          <BrowserRouter>
            {/* {Common.width &&
              (Common.width >= 767.98 ? (
                <NavContainer />
              ) : (
                <MovileNavContainer />
              ))} */}

            <Route exact path="/" component={Home} />

            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgotten" component={Forgotten} />
            <Route path="/notice" component={Notice} />
            <Route path="/community" component={Community} />
            <Route path="/tutor" component={Tutor} />
            <Route path="/tutee" component={Tutee} />
            <Route path="/chatting" component={Chatting} />
            <Route path="/mypage" component={MyPage} />
            <Route path="/myclass" component={MyClass} />

            <Route exact path="/admin" component={AdminHome} />
            <Route path="/admin/main" component={AdminMain} />
            <Route path="/admin/community" component={AdminCommunity} />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
