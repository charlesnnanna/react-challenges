import React from "react";
import Board from "./components/Board";
import './style.css'

  export default class TicTacToe extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }


  
  // ========================================
  

  