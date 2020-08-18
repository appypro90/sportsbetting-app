import React from 'react';
import { Route } from 'react-router';
import './App.scss';
import Login from './Components/Login.jsx';
import Layout from './Layout.jsx';
import Home from './Components/Home.jsx';
import News from './Components/News.jsx';
import Profile from './Components/Profile.jsx';
import CheckAuth from './Components/HOC/CheckAuth.jsx';


function App() {
  return (
    <Layout>
      <Route path='/login' component={Login} />
      <Route exact path='/' component={Home} />
      <Route exact path='/news' component={News} />
      <Route exact path='/profile' component={CheckAuth(Profile)} />
    </Layout>
  );
}

export default App;
