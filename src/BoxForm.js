import React, { Component } from 'react';

class BoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: "",
            width: "",
            backgroundColor: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    handleSubmit(evt){
        
    }
    render() {
        return (
            
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="height">Height</label>
                <input
                    id="height"
                    name="height"
                    value={this.state.height}
                    onChange={this.handleChange}>
                </input>
    
                <label htmlFor="width">Width</label>
                <input
                    id="width"
                    name="width"
                    value={this.state.width}
                    onChange={this.handleChange}>
                </input>
          
                <label htmlFor="backgroundColor">BackgroundColor</label>
                <input
                    id="backgroundColor"
                    name="backgroundColor"
                    value={this.state.backgroundColor}
                    onChange={this.handleChange}> 
                </input>
                <button>Add a New Box!</button>
            </form>
        )
    }
}

export default BoxForm;