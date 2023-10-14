import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [input, setInput] = useState(()=>{
    const storedInput = localStorage.getItem("input");
    return storedInput ? storedInput:"0";
  });
  const [result, setResult] = useState(()=>{
    const storedResult = localStorage.getItem("result");
    return storedResult ? storedResult:"0";
  });

  useEffect(()=>{
    localStorage.setItem("input",input.toString())
  },[input])

  useEffect(()=>{
    localStorage.setItem("result",result.toString())
  },[result])

  const cleardisplay = () => {
    setInput("0");
    setResult("0");
    localStorage.clear()
  };

  const clearLast = () => {
    let last = input.slice(0, -1);
    setInput(last);
  };

  const appendDigit = (digit) => {
    if (input === "0") {
      setInput(digit);
    } else {
      let a = input + digit;
      setInput(a);
    }
  };

  const handleValue = (e) => {
    setInput(e.target.value);
  };

  const handleOperation = () => {
    const res = eval(input);
    setResult(res);
  };

  return (
    <>
      <div className="container">
        <div className='calc'>
          <div className="output">
            <input type="text" id="screen" value={input} onChange={handleValue} readOnly/>
            <input type="text" id="screen" value={result} readOnly />
          </div>
          <div>
            <div className="row">
              <button onClick={cleardisplay} className="btn2"> 
                AC
              </button>
              <button onClick={clearLast} className="btn2">
                CE
              </button>
              <button onClick={() => appendDigit("%")} className="btn2">
                %
              </button>
              <button onClick={() => appendDigit("/")} className="btn1">
                /
              </button>
            </div>
            <div className="row">
              <button onClick={() => appendDigit("7")} className="btn">
                7
              </button>
              <button onClick={() => appendDigit("8")} className="btn">
                8
              </button>
              <button onClick={() => appendDigit("9")} className="btn">
                9
              </button>
              <button onClick={() => appendDigit("*")} className="btn1">
                X
              </button>
            </div>
            <div className="row">
              <button onClick={() => appendDigit("4")} className="btn">
                4
              </button>
              <button onClick={() => appendDigit("5")} className="btn">
                5
              </button>
              <button onClick={() => appendDigit("6")} className="btn">
                6
              </button>
              <button onClick={() => appendDigit("-")} className="btn1">
                -
              </button>
            </div>
            <div className="row">
              <button onClick={() => appendDigit("1")} className="btn">
                1
              </button>
              <button onClick={() => appendDigit("2")} className="btn">
                2
              </button>
              <button onClick={() => appendDigit("3")} className="btn">
                3
              </button>
              <button onClick={() => appendDigit("+")} className="btn1">
                +
              </button>
            </div>
            <div className="row">
              <button onClick={() => appendDigit("0")} className="btn0">
                0
              </button>
              <button onClick={() => appendDigit(".")} className="btn">
                .
              </button>
              <button onClick={handleOperation} className="btn1">
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
