import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

function AddUser(props) {
  const [usernameInput, setUsernameInput] = useState('');
  const [ageInput, setAgeInput] = useState('');

  function formHandler(event) {
    event.preventDefault();
    if (
      usernameInput.trim().length === 0 ||
      ageInput.trim().length === 0 ||
      +ageInput < 1
    ) {
      return;
    }
    console.log(usernameInput, ageInput);
    setUsernameInput('');
    setAgeInput('');
  }
  function usernameChangeHandler(event) {
    setUsernameInput(event.target.value);
  }
  function ageChangeHandler(event) {
    setAgeInput(event.target.value);
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={formHandler}>
        <label>UserName</label>
        <input
          id="username"
          type="text"
          value={usernameInput}
          onChange={usernameChangeHandler}
        ></input>
        <label>Age</label>
        <input
          id="age"
          type="number"
          value={ageInput}
          onChange={ageChangeHandler}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
