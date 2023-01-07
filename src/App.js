import { useState } from "react";
import "./index.css"

function App() {
  const[displayvalue,setDisplayvalue] = useState("");
  const[firstval,setFirstval] = useState(0);
  const[valuerem,setValuerem] = useState("");
  const changedisplay = (e) =>{
      setDisplayvalue(displayvalue + e.target.id);


    
    if(e.target.value == "+" || e.target.value == "-" || e.target.value == "/" || e.target.value == "*"){
      setFirstval(Number(displayvalue));
      setDisplayvalue("");
      setValuerem(e.target.value);
    }else if(e.target.value == "%"){
      setDisplayvalue(0.01 * Number(displayvalue));
      setFirstval(0.01 *  Number(displayvalue));

    }else if(e.target.value == "+/-"){
      setDisplayvalue(-Number(displayvalue));
      setFirstval(-Number(displayvalue));
    }else if(e.target.value == "C"){
      setDisplayvalue("");
      setFirstval(0);
    }else if(e.target.value == "."){
      setDisplayvalue(Number(displayvalue));
      setFirstval(Number(displayvalue));
    }else if(e.target.value == "="){
      switch(valuerem){
        case "+":
          setDisplayvalue(firstval + Number(displayvalue));
          setFirstval(firstval + Number(displayvalue));
        break;
        case "-":
          setDisplayvalue(firstval - Number(displayvalue));
          setFirstval(firstval - Number(displayvalue));
        break;
        case "/":
          setDisplayvalue(firstval / Number(displayvalue));
          setFirstval(firstval / Number(displayvalue));
        break;
        case "*":
          setDisplayvalue(firstval * Number(displayvalue));
          setFirstval(firstval * Number(displayvalue));
        break;
        
        default:
          break;
      }

      
    }
  }

  return (
    <div className="App">
      <div className="cal-frame">
        <div className="display" id="display">{displayvalue}</div>
        <div className="menu">
          <div className="buttons-nrs">
            <button className="button btnr" id="9" onClick={changedisplay}>9</button>
            <button className="button btnr" id="8" onClick={changedisplay}>8</button>
            <button className="button btnr" id="7" onClick={changedisplay}>7</button>
            <button className="button btnr" id="6" onClick={changedisplay}>6</button>
            <button className="button btnr" id="5" onClick={changedisplay}>5</button>
            <button className="button btnr" id="4" onClick={changedisplay}>4</button>
            <button className="button btnr" id="3" onClick={changedisplay}>3</button>
            <button className="button btnr" id="2" onClick={changedisplay}>2</button>
            <button className="button btnr" id="1" onClick={changedisplay}>1</button>
            <button className="button btnr" value={"="} onClick={changedisplay}>=</button>
            <button className="button btnr" id="0" onClick={changedisplay}>0</button>
            <button className="button btnr" id="." onClick={changedisplay}>.</button>
          </div>
          <div className="buttons-acts">
            <button className="button" value={"+"} onClick={changedisplay}>+</button>
            <button className="button" value={"-"} onClick={changedisplay}>-</button>
            <button className="button" value={"/"} onClick={changedisplay}>/</button>
            <button className="button" value={"*"} onClick={changedisplay}>*</button>
            <button className="button" value={"%"} onClick={changedisplay}>%</button>
            <button className="button" value={"+/-"} onClick={changedisplay}>+/-</button>
            <button className="button" value={"C"} onClick={changedisplay}>C</button>


          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
