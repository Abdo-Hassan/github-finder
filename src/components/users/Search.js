import React, { useState, useContext } from 'react';
import GithubContext from '../context/github/GithubContext';
import AlertContext from '../context/alert/AlertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('');

  const onChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.makeAlert('please enter a user name', 'danger');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };
  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search Users'
          value={text}
          onChange={onChange}
          autoFocus
        />
        <input
          type='submit'
          value='search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-block btn-light'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
