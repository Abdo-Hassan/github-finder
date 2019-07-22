import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
class App extends Component {
  async componentDidMount() {
    const res = await axios.get('https://api.github.com/users');
    console.log(res.data);
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
