import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {

  //quarter init and useState
  const quarterInitial = () => 1
  const [quarter, setQuarter] = useState(() => quarterInitial())

  //down init and useState
  const downInitial = () => 1
  const [down, setDown] = useState(() => downInitial())

  //change quarter and alert for end of game
  const changeQuarter = () => setQuarter(prevQuarter => {

    if(prevQuarter < 4){
    return prevQuarter + 1
    }

    else{
    window.location.reload(true)
    return alert('The Game Has Ended')
    }

  })

  //change down
  const changeDown = () => setDown(prevDown => {
    if (prevDown < 4){
      return prevDown + 1
    }

    else{
      return prevDown = 1
    }
  })
  
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
      <div className="down__value">{down}</div>
      <button onClick={changeDown}>+</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
      <div className="quarter__value">{quarter}</div>
      <button onClick={changeQuarter}>+</button>
      </div>
    </div>
  );
};

export default BottomRow;
