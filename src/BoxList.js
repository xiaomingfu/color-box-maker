import React, { Component } from 'react';
import Box from './Box';
import BoxForm from './BoxForm';

class BoxList extends Component {
    constructor(props){
        super(props);
        this.state = {boxes: [{width: 10, height: 40, backgroundColor: 'orange'}]};
    }
    render() {
        const boxes = this.state.boxes.map(box => (
            <Box
            width={box.width}
            height={box.height}
            backgroundColor={box.backgroundColor}
            />
        ));
        return (
            <div>
                <h1>Box Maker Thingy</h1>
                {boxes} 
            </div>
        )
    }
}

export default BoxList;