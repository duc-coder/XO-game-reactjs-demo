import React, { Component } from 'react'
import Square from './Square';

function caculateWinner (squares) {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [8,4,0]
    ];
    for (let i=0; i < lines.length; i++) {
        const [a,b,c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

export class Board extends React.Component {
    state = {
        squares: Array(9).fill(null),
        xIsNext: true,
    };

    handleClick = (i) => {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        })
    };

    renderSquare(i) {
        return <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />
    };

    handleReset = () => { 
        this.setState({squares: Array(9).fill(null)})
     };

    render() {
        
        const winner = caculateWinner(this.state.squares);

        let status;

        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div style={{backgroundColor: "orangered", width: "30%", height: "500px", borderRadius: "20px", margin: "auto"}}>
                <div className='status my-5' style={{ fontSize: "50px", fontWeight: "bold" }}>{status}</div>
                <div className='board-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                
                <button className='btn btn-success btn-lg' style={{marginTop: "30px"}} onClick={() => { this.handleReset() }}>Reset Game</button>
            </div>
        )
    }
};



