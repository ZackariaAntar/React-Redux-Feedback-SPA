import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";


function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    getReflections()
  })

  const getReflections = () => {
    axios.get('/').then((response)=>{
      console.log(response.data);
      dispatch({type:'GET_REFLECTIONS', payload: response.data})
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    // <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <form>
          <label className="InputLabel">Feeling</label>
          <input type="text" placeholder="How are you feeling (1-5)" />
          <label className="InputLabel">Understanding</label>
          <input
            type="text"
            placeholder="How well did you understand (1-5)"
            />
          <label className="InputLabel">Support</label>
          <input
            type="text"
            placeholder="How supported did you feel (1-5)"
            />
          <label className="InputLabel">Comments</label>
          <textarea placeholder="What comments do you have?" />
        </form>
      </div>
    // </Router>
  );
}

export default App;
