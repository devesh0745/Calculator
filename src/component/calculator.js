import "./calculator.css";
import { useState } from "react";

export default function Calculator(){
   // console.log("running")
    const [first,setFirst]=useState([]);
    const [firstNumber,setFirstNumber]=useState(null);
    const [second,setSecond]=useState([]);
    const [secondNumber,setSecondNumber]=useState();
    const [operation,setOperation]=useState(" ");
    const [result,setResult]=useState(null);

    function handleNumber(i){
        
        if(operation==" "){
            //console.log("first number")
            /*let checkDot;
            if(i==="."){
            checkDot=first.includes(i)
            }*/
        
            first.push(i)
           // console.log(first)
            let getFirst=""
            for(let member in first) {
                getFirst += first[member];
               // console.log(getFirst)
            }
            setFirstNumber(getFirst)
           // console.log("first:",firstNumber)
        }else{
           // console.log("second number")
            second.push(i)
            let getSecond=""
            for(let member in second) {
                getSecond += second[member];
               // console.log(getFirst)
            }
            setSecondNumber(getSecond)
          //  console.log("second:",secondNumber)
        }
    }
    function handleOperation(e){
        //console.log(e.target.value)
        //setOperation=" "
        if(e.target.value==="-"){
            setOperation(e.target.value)
        }else if(firstNumber===null){
            // console.log("running");
           return
         }
        else{
        setOperation(e.target.value)
        console.log(operation);
        }
    }
    function handlePerformOperation(){
        let f="";
        let s="";
        let answer=0
        console.log("operation:",operation)
       // let text = "";
        for(let member in first) {
            f += first[member];
           // console.log(f)
        }
        for(let member in second) {
            s += second[member];
          //  console.log(s)
        }
        if(operation==="+"){
             answer=parseFloat(f) + parseFloat(s);
        }else if(operation==='-'){
             answer=parseFloat(f) - parseFloat(s)
        }else if(operation==='/'){
             answer=parseFloat(f) / parseFloat(s)
        }else{
             answer=parseFloat(f) * parseFloat(s)
        }
        if(firstNumber===null){
            return
        }
        setResult(answer);
       // console.log(answer)
       // console.log(result)
    }
    function handleClear(){
        setFirst([]);
        setFirstNumber(null);
        setSecond([]);
        setSecondNumber(null);
        setOperation(" ");
        setResult(null);
    }
    function handleSetOperator(e){
        let setMinus=false;
        if(setMinus===true){
            setOperation(" ")
            console.log("set add");
        }else{
            setOperation(e.target.value);
            setMinus=true;
            console.log("set minus");
        }
    }

    return(
        <div className="container">
            <div className="display">
                {result===null?<p className="display-number">{firstNumber}{operation}{secondNumber}</p>:<p className="display-number">{result}</p>}
            </div>
            <div className="numbers-operations">
                <button className="operators" onClick={handleClear}>C</button>
                <button className="operators" value="/" onClick={handleOperation}>/</button>
                <button className="operators" value="x" onClick={handleOperation}>x</button>
                <button className="operators" value="-" onClick={handleOperation}>-</button>
                <button className="operators" value="+" onClick={handleOperation}>+</button>
                <button className="operators" value="-" onClick={handleSetOperator}>+/-</button>
                <div className="number" onClick={()=>handleNumber(1)}>1</div>
                <div className="number" onClick={()=>handleNumber(2)}>2</div>
                <div className="number" onClick={()=>handleNumber(3)}>3</div>
                <div className="number" onClick={()=>handleNumber(4)}>4</div>
                <div className="number" onClick={()=>handleNumber(5)}>5</div>
                <div className="number" onClick={()=>handleNumber(6)}>6</div>
                <div className="number" onClick={()=>handleNumber(7)}>7</div>
                <div className="number" onClick={()=>handleNumber(8)}>8</div>
                <div className="number" onClick={()=>handleNumber(9)}>9</div>
                <div className="number" onClick={()=>handleNumber(0)}>0</div>
                <div className="dot" onClick={()=>handleNumber(".")}>.</div>
              
                <button className="equals" onClick={handlePerformOperation}>=</button>
            </div>

        </div>
    )
}