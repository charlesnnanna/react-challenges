import React from "react";
import Square from "./Square";
import '../style.css'

export default class Board extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            squareObject : {
              squares: Array(9).fill(null),
              xIsNext: true
            },
            moves : [],
        };

    }

    handleClick = (i) => {
        //const squares = [...this.state.squareObject.squares]
        const squares = [...this.state.squareObject.squares]
        if (calculateWinner(squares) || squares[i]){
          return
        }
        squares[i] = this.state.squareObject.xIsNext ? 'X' : 'O'
        this.setState({
            squareObject : {
              squares : [...squares],
              xIsNext : !this.state.squareObject.xIsNext,
            },
            moves : [...this.state.moves, {
              squares : [...squares],
              xIsNext : !this.state.squareObject.xIsNext,
            }],
          },
        () => {console.log(this.state)})   
    }

    handleHistory = (i) => {
      const moves = this.state.moves.slice(0, i+1)
      const squares = moves[i].squares
      console.log(squares)


      this.setState({
        squareObject : {
          squares : [...squares],
          xIsNext : this.state.moves[i].xIsNext
        },
        moves : [...moves],
        //xIsNext : !this.state.xIsNext,
      },
    () => {console.log(this.state)})  
    }

    startOver () {
      this.setState({
        squareObject : {
          squares: Array(9).fill(null),
          xIsNext: true
        },
        moves : [],
      },  () => {console.log(this.state)})  
    }


    renderSquare(i) {
      return <Square value = {this.state.squareObject.squares[i]} onClick = {this.handleClick.bind(this, i)} />;
    }

  
    render() {
      const winner = calculateWinner(this.state.squareObject.squares)
      let status
      if (winner){
        status = 'Winner: ' + winner
      } else{
        status = 'Next player: ' + (this.state.squareObject.xIsNext ? 'X' : 'O') ;
      }
      
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>

          <div> 
            <button onClick={() => {this.startOver()}} className="border border-black p-2 mt-4 block">Go to game start</button>
            {
              this.state.moves && this.state.moves.map((move, index) => {
                  return <button key = {index} onClick = {this.handleHistory.bind(this, index)} className="border border-black p-2 block">Go to move #{index}</button>
              }) 
            }
          </div>
        </div>
      );
    }
  }

  function calculateWinner (squares) {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]
    let result = null
    for (let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a]  === squares[c]){
        //console.log (squares[a])
        result = squares[a]
        break;
      } 
    }

    return result
  }