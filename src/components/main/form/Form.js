import React, {Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Form extends Component {

    state = {
        name: '',
        age: 0,
        submited: false
    };

    onNameChange = event => {
        this.setState({name: event.target.value});
    }

    onAgeChange = event => {
        this.setState({age: event.target.value});
    }

    onSubmit = event => {
        event.preventDefault();

        axios
            .post('http://localhost:8000/api/users', {name: this.state.name, age: this.state.age})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        this.setState({submited: true})
    }

    render(){
        if (this.state.submited) return <Redirect to='/'/>
        return (
            <div>
            <form onSubmit={this.onSubmit}>
                <input type="text" name="name" onChange={this.onNameChange} placeholder="name"/>
                <input type="age" name="age" onChange={this.onAgeChange} placeholder="age"/>
                <input type="submit" name="Send"/>
            </form>
            </div>
        );
        
    }
}

export default Form;