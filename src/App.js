// import logo from './logo.svg';

// function App() {
//   return <div>Test4[D]</div>;
// }

// export default App;

import React from 'react';
import { Home, Signup, Login, Forgotten } from './pages';
import { BrowserRouter, Route } from 'react-router-dom';
import './stores/index';
import './App.css';
import { Provider } from 'mobx-react';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Provider> */}
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgotten" component={Forgotten} />
        </BrowserRouter>
        {/* </Provider> */}
      </div>
    );
  }
}

export default App;
