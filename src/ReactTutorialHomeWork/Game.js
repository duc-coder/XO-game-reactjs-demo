import { Board } from "./Board";
import React, {Component} from "react";

export class Game extends React.Component {
    render () {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/*status*/}</div>
                    <ol>{/*todo*/}</ol>
                </div>
            </div>
        )
    }
}

