import React, { Component } from 'react';
import Box from './Box';
import BoxForm from './BoxForm';

class BoxList extends Component {
    constructor(props){
        super(props);
        this.remove = this.remove.bind(this);

    }
   
    remove(){
        this.setState({
            height: "",
            width: "",
            backgroundColor: "",
        });
    }
    render() {
        return (
            <div>
                <h1>Box Maker Thingy</h1>
                <BoxForm addBox={this.addBox}/>
                
                <button onClick={this.remove}>Remove The Box!</button>
            </div>

        )


    }
}

export default BoxList;