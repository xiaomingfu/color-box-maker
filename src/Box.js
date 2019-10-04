import React, {Component} from 'react';

class Box extends Component{
    render(){
        let Box = {height: this.props.height, width: this.props.width, backgroundColor: this.props.backgroundColor};
        return <div className="Box" style={Box}></div>
    }
}

export default Box;