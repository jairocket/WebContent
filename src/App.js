import React from 'react';
import './style/App.css';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CriarAd from './pages/CreateAd';
import MyAds from './pages/MyAds';
import Messages from './pages/Messages';
import RegisterPage from './pages/RegisterPage';
import Find from './pages/Find';
import Ad from './pages/Ad';
import { Report } from './pages/Report';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={CriarAd} />
          <Route path='/MyAds' component={MyAds} />
          <Route path='/messages' component={Messages} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/find" component={Find} />
          <Route path="/Ad" component={Ad} />
          <Route path="/report" component={Report} />
        </Switch>
      </Router>
    </>
  );
}

export default App;


