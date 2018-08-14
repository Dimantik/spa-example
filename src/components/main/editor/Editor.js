import React, {Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Form extends Component {

    state = {
        id: this.props.match.params.id,
        name: '',
        age: 0,
        submited: false
    };
    
    componentDidMount() {
        axios.get(`http://localhost:8000/api/users/${this.state.id}`).then(res => {
            console.log(res); 
            this.setState({name: res.data.name, age: res.data.age,});
        });
    }

    onNameChange = event => {
        this.setState({name: event.target.value});
    }

    onAgeChange = event => {
        this.setState({age: event.target.value});
    }

    onSubmit = event => {
        event.preventDefault();

        axios
            .put(`http://localhost:8000/api/users/${this.state.id}`, {id: this.state.id, 
                name: this.state.name, age: this.state.age,})
            .then(res => {
                console.log(res.data);
            })
        this.setState({submited: true})
    }

    render(){
        if (this.state.submited) return <Redirect to={`/`}/>
        return (
            <div>
            <h6>User id: {this.state.id}</h6>
            <form onSubmit={this.onSubmit}>
                <input type="text" name="name" onChange={this.onNameChange} value={this.state.name} placeholder="name"/>
                <input type="age" name="age" onChange={this.onAgeChange} value={this.state.age} placeholder="age"/>
                <input type="submit" name="Send"/>
            </form>
            </div>
        );
    }
}

export default Form;