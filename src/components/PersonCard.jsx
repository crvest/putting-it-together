import React, { Component } from "react";

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        };
    }

    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <div className="card">
                <h1>{ lastName}, { firstName }</h1>
                <p>Age: { this.state.age }</p>
                <p>Hair Color: { hairColor }</p>
                <button onClick={ this.birthday }>Birthday for { firstName } { lastName }</button>
            </div>
        );
    }

    birthday = () => {
        this.setState( {age: this.state.age+1} );
    }
}

export default PersonCard;