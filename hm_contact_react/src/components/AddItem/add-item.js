import React, { Component } from "react";

import "./add-item.css";



export default class AddItem extends Component {

    state = {
        name: "",
        age: "",
        // social: null,
    }

    onNameChange = (e) => {
        //console.log(e.target.value);
        // this.state.name = ?
        this.setState({
            name: e.target.value,
        });
    }

    onAgeChange = (e) => {
        this.setState({
            age: e.target.value,
        });
    }

    onSubmitContact = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state);
        this.setState({
            name: "",
            age: "",
        });
    }

    render() {
        return (
            <>
                <form onSubmit={this.onSubmitContact} className="form-group mt-4">
                    <input onChange={this.onNameChange}
                        name="name" placeholder="enter name"
                        className="form-control mb-3" value={this.state.name} />
                    <input onChange={this.onAgeChange} value={this.state.age} name="age" placeholder="enter age" className="form-control" />
                    <div className="bottom-right">
                        <button type="submit" className="btn btn-success"><i className="fas fa-plus-circle"></i>
                        </button>
                    </div>
                </form>



            </>

        );

    }

}