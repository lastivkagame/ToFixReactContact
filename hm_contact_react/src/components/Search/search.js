import React, { Component } from "react";

import "./search.css";

//import {Button} from 'react-bootstrap';

export default class SearchContact extends Component {

state=
{
    query: ""
}

    onSearchChanged = (e) => {

        this.props.onSearch(e.target.value);

        this.setState({
            query : e.target.value
        });
        //console.log(e.target.value);
    }

    render() {

        return (
            <>
                <form class="d-flex">
                    <input onChange={this.onSearchChanged} class="form-control me-2"  placeholder="Search"  />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>

                {/* <InputGroup className="mb-3 mt-3 ">
                    <FormControl placeholder="Search" />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" className="btn">Search</Button>
                    </InputGroup.Append>
                </InputGroup> */}
            </>
        );
    }
}
