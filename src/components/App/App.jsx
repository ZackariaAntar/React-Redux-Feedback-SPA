import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
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
    <Router>
      <div className="App">
        <Header />
        <FeedbackForm />
        
      </div>
    </Router>
  );
}

export default App;
