import React, { Component } from 'react';
import uuid from 'uuid/v4'
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
    handleSubmit(evt) {
        evt.preventDefault();
        const newBox = {...this.state, id:uuid()};
        this.props.createBox(newBox);
        this.setState({
            height: "",
            width: "",
            backgroundColor: "",
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="height">Height</label>
                    <input
                        id="height"
                        name="height"
                        value={this.state.height}
                        onChange={this.handleChange}>
                    </input>
                </div>

                <div>
                    <label htmlFor="width">Width</label>
                    <input
                        id="width"
                        name="width"
                        value={this.state.width}
                        onChange={this.handleChange}>
                    </input>
                </div>

                <div>
                    <label htmlFor="backgroundColor">BackgroundColor</label>
                    <input
                        id="backgroundColor"
                        name="backgroundColor"
                        value={this.state.backgroundColor}
                        onChange={this.handleChange}>
                    </input>
                </div>
                <button>Add a New Box!</button>
            </form>
        )
    }
}

export default BoxForm;