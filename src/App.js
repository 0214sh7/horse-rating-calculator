import { InputResult } from './components/inputHorse';
import { OutputResult, OutputError } from './components/outputHorse';
import { InputSample } from './components/sample';
import React, { useState } from "react";
import './App.css';

// TODO: handle invalid inputs
// TODO: improve styles
// TODO: handle any size
// TODO: introduce MUI

function App() {

  const courseRatio = {
    'tk':3,
    'ts':2.5,
    'tm':2,
    'ti':1.75,
    'tl':1.5,
    'te':1,
    'dk':3,
    'ds':2.5,
    'dm':2,
    'di':1.5,
    'dl':1,
  }

  const initialSize = 5
  const [size, setSize] = useState(initialSize)
  const [allowance, setAllowance] = useState(4)
  const [course, setCourse] = useState('tl')

  var initialHorse = {
    id: 0,
    name: '',
    isMare: false,
    prerating: '',
    margin: '-0.001'
  }

  const [inputHorse1, setInputHorse1] = useState({ ...initialHorse, id: 1 });
  const [inputHorse2, setInputHorse2] = useState({ ...initialHorse, id: 2 });
  const [inputHorse3, setInputHorse3] = useState({ ...initialHorse, id: 3 });
  const [inputHorse4, setInputHorse4] = useState({ ...initialHorse, id: 4 });
  const [inputHorse5, setInputHorse5] = useState({ ...initialHorse, id: 5 });

  const [outputHorse1, setOutputHorse1] = useState({ ...initialHorse, id: 1 });
  const [outputHorse2, setOutputHorse2] = useState({ ...initialHorse, id: 2 });
  const [outputHorse3, setOutputHorse3] = useState({ ...initialHorse, id: 3 });
  const [outputHorse4, setOutputHorse4] = useState({ ...initialHorse, id: 4 });
  const [outputHorse5, setOutputHorse5] = useState({ ...initialHorse, id: 5 });

  var initialRating = []
  for(var i=0;i<size;i++){
    initialRating[i] = []
    for(var j=0;j<size;j++){
      initialRating[i][j] = '-'
    }
  }

  const [newRating, setNewRating] = useState(initialRating);
  const [inputError, setInputError] = useState([]);

  const calculation = () => {

    //エラー検知
    setInputError(inputError.splice(0))
    var err = []

    if(courseRatio[course] === undefined){err.push("コースが不正です")}
    if(allowance.length === 0){err.push("牝馬斤量差が入力されていません")}
    if(isNaN(Number(allowance))){err.push("牝馬斤量差が不正です")}
    
    if(inputHorse1.prerating.length === 0){err.push("1 着のプレレーティングが入力されていません")}
    if(inputHorse2.prerating.length === 0){err.push("2 着のプレレーティングが入力されていません")}
    if(inputHorse3.prerating.length === 0){err.push("3 着のプレレーティングが入力されていません")}
    if(inputHorse4.prerating.length === 0){err.push("4 着のプレレーティングが入力されていません")}
    if(inputHorse5.prerating.length === 0){err.push("5 着のプレレーティングが入力されていません")}

    if(isNaN(Number(inputHorse1.prerating))){err.push("1 着のプレレーティングが不正です")}
    if(isNaN(Number(inputHorse2.prerating))){err.push("2 着のプレレーティングが不正です")}
    if(isNaN(Number(inputHorse3.prerating))){err.push("3 着のプレレーティングが不正です")}
    if(isNaN(Number(inputHorse4.prerating))){err.push("4 着のプレレーティングが不正です")}
    if(isNaN(Number(inputHorse5.prerating))){err.push("5 着のプレレーティングが不正です")}

    if(inputHorse2.margin === undefined || Number(inputHorse2.margin) < 0){err.push("1 着と 2 着の着差が入力されていません")}
    if(inputHorse3.margin === undefined || Number(inputHorse3.margin) < 0){err.push("2 着と 3 着の着差が入力されていません")}
    if(inputHorse4.margin === undefined || Number(inputHorse4.margin) < 0){err.push("3 着と 4 着の着差が入力されていません")}
    if(inputHorse5.margin === undefined || Number(inputHorse5.margin) < 0){err.push("4 着と 5 着の着差が入力されていません")}

    setInputError(err)

    if(err.length !== 0){
      return;
    }
    //エラーなし

    var distance = Array(size);
    
    distance[0] = 0
    distance[1] = distance[0] + Number(inputHorse2.margin)
    distance[2] = distance[1] + Number(inputHorse3.margin)
    distance[3] = distance[2] + Number(inputHorse4.margin)
    distance[4] = distance[3] + Number(inputHorse5.margin)

    var rating = []
    for(var i=0;i<size;i++){
      rating[i] = []
    }

    const ratio = courseRatio[course]

    for(i=0;i<size;i++){
      rating[i][0] = Number(inputHorse1.prerating) + (inputHorse1.isMare?Number(allowance):0) + ratio * (distance[0]-distance[i])
      rating[i][1] = Number(inputHorse2.prerating) + (inputHorse2.isMare?Number(allowance):0) + ratio * (distance[1]-distance[i])
      rating[i][2] = Number(inputHorse3.prerating) + (inputHorse3.isMare?Number(allowance):0) + ratio * (distance[2]-distance[i])
      rating[i][3] = Number(inputHorse4.prerating) + (inputHorse4.isMare?Number(allowance):0) + ratio * (distance[3]-distance[i])
      rating[i][4] = Number(inputHorse5.prerating) + (inputHorse5.isMare?Number(allowance):0) + ratio * (distance[4]-distance[i])
    }

    for(var j=0;j<size;j++){
      if(inputHorse1.isMare){rating[0][j] -= Number(allowance)}
      if(inputHorse2.isMare){rating[1][j] -= Number(allowance)}
      if(inputHorse3.isMare){rating[2][j] -= Number(allowance)}
      if(inputHorse4.isMare){rating[3][j] -= Number(allowance)}
      if(inputHorse5.isMare){rating[4][j] -= Number(allowance)}
    }

    for(i=0;i<size;i++){
      for(j=0;j<size;j++){
        // 0.65以上を切り上げる
        rating[i][j] = Math.floor(rating[i][j] + 1.0 - 0.65 + 0.0001)
        rating[i][j] = String(rating[i][j]) + (i===0?"+α":"")
      }
    }

    setOutputHorse1(inputHorse1)
    setOutputHorse2(inputHorse2)
    setOutputHorse3(inputHorse3)
    setOutputHorse4(inputHorse4)
    setOutputHorse5(inputHorse5)
    setNewRating(rating)

  }

  return (
    <div>
      <InputResult 
        size = {size} setSize = {setSize}
        allowance = {allowance} setAllowance = {setAllowance}
        course = {course} setCourse = {setCourse}
        horses = {[
          inputHorse1,inputHorse2,inputHorse3,inputHorse4,inputHorse5
        ]} 
        setHorses = {[
          setInputHorse1,setInputHorse2,setInputHorse3,setInputHorse4,setInputHorse5
        ]}
        calculation={calculation}
      />
      <InputSample 
        setSize = {setSize}
        setCourse = {setCourse}
        setAllowance = {setAllowance}
        setHorses = {[
          setInputHorse1,setInputHorse2,setInputHorse3,setInputHorse4,setInputHorse5
        ]}
      />
      <OutputError
        error = {inputError}
      />
      <OutputResult
        size = {size}
        horses = {[
          outputHorse1,outputHorse2,outputHorse3,outputHorse4,outputHorse5
        ]} 
        rating = {newRating}
      />
    </div>
  );
}

export default App;
