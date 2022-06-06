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
function RestForm() {
  const [res, setRest] = useState(0);
  const [num, setNum] = useState(0);
  const [num1, setNum1] = useState(0);

  function handleChange(e) {
    setRest(e.target.value);
   
  }
  function handleChange1(e) {
    setNum1(e.target.value);
  }

  function handleSubmit(e) {
    setRest(Number(num) + Number(num1));
    e.preventDefault();
    console.log(e)
  }

  return <form onSubmit={handleSubmit}>
  <input type="number" value={num} onChange={handleChange} /><strong>-</strong>
  <input type="number" value1={num1} onChange={handleChange1} />
  <input type="submit" value="Add" />
  <p> Sum is {res} </p>
  </form>;
}
function Contador() {
  let [contState, setCont] = useState(0);
  return(
    <React.Fragment>
      <span>{contState}</span>
    <button onClick={()=>setCont(contState + 1)}>Aumentar en 1</button>
    <button onClick={()=>setCont(contState - 1)}>Decrementar en 1</button>
    </React.Fragment>
  )
}
//console.log(useState)
const sumf = <SumForm />; 
const resf = <RestForm />; 
const contador = <Contador />;
const container = document.getElementById('root');
const root = createRoot(container);
root.render(sumf);
root.render(resf);
root.render(contador);