// import logo from './logo.svg';

// function App() {
//   return <div>Test4[D]</div>;
// }

// export default App;

import React from 'react';
import { Home, Signup } from './pages';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
