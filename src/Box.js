import React, {Component} from 'react';
import './Box.css';

class Box extends Component{
    render(){
        let Box = {height: `${this.props.height}em`, width: `${this.props.width}em`, backgroundColor: this.props.backgroundColor};
        return (
        <div>
            <div className="Box" style={Box}>
            </div>
            <button onClick={this.props.removeBox}>Remove the box!</button>
        </div>
        );
    }
}

export default Box;