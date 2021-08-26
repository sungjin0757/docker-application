import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const [lists, setLists] = useState([])
  const [value, setValue] = useState("")


  const changeHandler = (event) => {
    setValue(event.currentTarget.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();

    axios.post('/api/values', { value: value })
      .then(response => {
        if (response.data.success) {
          setLists([...lists, response.data])
          setValue("");
        } else {
          alert('값을 DB에 넣는데 실패했습니다.')
        }
      })
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">

        
          <br />
            안녕하세요.
          <form className="example" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="입력해주세요..."
              onChange={changeHandler}
              value={value}
            />
            <button type="submit">확인.</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
