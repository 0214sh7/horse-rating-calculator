import { InputResult } from './components/inputHorse';
import { OutputResult } from './components/outputHorse';
import React, { useState } from "react";
import './App.css';

function App() {

  const initialSize = 5
  const [size, setSize] = useState(initialSize)
  const [allowance, setAllowance] = useState(4)
  const [course, setCourse] = useState('tl')

  var initialHorse = {
    id: 0,
    name: '',
    isMare: false,
    prerating: '',
    margin: '0'
  }

  const [horse1, setHorse1] = useState({ ...initialHorse, id: 1 });
  const [horse2, setHorse2] = useState({ ...initialHorse, id: 2 });
  const [horse3, setHorse3] = useState({ ...initialHorse, id: 3 });
  const [horse4, setHorse4] = useState({ ...initialHorse, id: 4 });
  const [horse5, setHorse5] = useState({ ...initialHorse, id: 5 });


  return (
    <div>
      <InputResult 
        size = {size} setSize = {setSize}
        allowance = {allowance} setAllowance = {setAllowance}
        course = {course} setCourse = {setCourse}
        horses = {[
          horse1,horse2,horse3,horse4,horse5
        ]} 
        setHorses = {[
          setHorse1,setHorse2,setHorse3,setHorse4,setHorse5
        ]}
      />
      <OutputResult/>
    </div>
  );
}

export default App;
