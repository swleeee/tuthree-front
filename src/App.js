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
  AdminHome,
  AdminUser,
  AdminMain,
  AdminCommunity,
} from './pages';
import { BrowserRouter, Route } from 'react-router-dom';
import { inject, observer, Provider } from 'mobx-react';
import stores from './stores';
import './stores/index';
import './App.css';
import Common from './stores/Common/Common';
import NavContainer from './components/Nav';
import MovileNavContainer from './components/MobileNav';

// @inject('Common')
@observer
class App extends React.Component {
  state = {
    width: null,
  };
  async componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    // this.setState({ ...this.state, width: window.innerWidth - 10 });
    Common.width = window.innerWidth - 10;
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

            <div>
              <Route exact path="/" component={Home} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgotten" component={Forgotten} />
              <Route path="/notice" component={Notice} />
              <Route exact path="/admin" component={AdminHome} />
              <Route path="/admin/main" component={AdminMain} />
              <Route path="/admin/community" component={AdminCommunity} />
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
