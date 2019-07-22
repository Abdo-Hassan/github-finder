import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };

  // search github users
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITGUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITGUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false, alert: null });
  };

  // clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };
  // set alert message
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
  };

  render() {
    const { users, loading } = this.state;
    return (
      <div>
        <Navbar />
        <div className='container'>
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
