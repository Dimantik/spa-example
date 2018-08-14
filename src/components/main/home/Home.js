import React, {Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

class Home extends Component {

    state = {
        users: [],
        id: ''
    };
    
    componentDidMount() {
        this.downloadUsers();
    }

    downloadUsers = () => {
        axios.get('http://localhost:8000/api/users').then(res => {
            console.log(res); 
            this.setState({users: res.data});
        });
    }

    onUserClick = (_id, event) => {
        this.setState({id: _id});
    }

    onDeleteUser = (id, event) => {
        axios.delete(`http://localhost:8000/api/users/${id}`).then(res => {
            console.log(res);
            this.downloadUsers();
        });
    }
    
    render() {
        if (this.state.id != '') return <Redirect to={`/editor/${this.state.id}`}/>
        return (
          <div>
            <h2>Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                    </tr>
                </thead>
                {this.state.users.map(user => <tr key={user._id}><div onClick={this.onUserClick.bind(this, user._id)}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td></div>
                <button onClick={this.onDeleteUser.bind(this, user._id)}>удалить</button></tr>)}
            </table>
          </div>
        );
    }
}

export default Home;