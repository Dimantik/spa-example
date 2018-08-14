import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './home/Home';
import Form from './form/Form';
import Editor from './editor/Editor';

class Navigation extends Component {

    render(){
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/form">Form</Link></li>
                    </ul>

                    <Route exact path="/" component={Home}/>
                    <Route path="/form" component={Form}/>
                    <Route path="/editor/:id" component={Editor}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default Navigation;