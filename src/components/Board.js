import React from "react";
import Square from "./Square";
import "./Board.css";

const Board = ({ squares, onClick}) => {


  const renderSqueare = (i) => {
    return (
        <Square 
            value={squares[i]} 
            onClick={() => onClick(i)} 
        />
    );
  }


    return (
      <div className="board-wrapper">

        <div className="board-row">
          {renderSqueare(0)}
          {renderSqueare(1)}
          {renderSqueare(2)}
        </div>
        <div className="board-row">
          {renderSqueare(3)}
          {renderSqueare(4)}
          {renderSqueare(5)}
        </div>
        <div className="board-row">
          {renderSqueare(6)}
          {renderSqueare(7)}
          {renderSqueare(8)}
        </div>
      </div>
    );
}
export default Board