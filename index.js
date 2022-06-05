import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import './style.css';

function SumForm() {
  const [sum, setSum] = useState(0);
  const [num, setNum] = useState(0);
  const [num1, setNum1] = useState(0);

  function handleChange(e) {
    setNum(e.target.value);
   
  }
  function handleChange1(e) {
    setNum1(e.target.value);
  }

  function handleSubmit(e) {
    setSum(Number(num) + Number(num1));
    e.preventDefault();
    console.log(e)
  }

  return <form onSubmit={handleSubmit}>
  <input type="number" value={num} onChange={handleChange} /><strong>+</strong>
  <input type="number" value1={num1} onChange={handleChange1} />
  <input type="submit" value="Add" />
  <p> Sum is {sum} </p>
  </form>;
}
console.log(useState)
const el = <SumForm />; 
const container = document.getElementById('root');
const root = createRoot(container);
root.render(el);