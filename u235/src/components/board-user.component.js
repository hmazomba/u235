import React, { Component } from 'react'
import UserService from "../services/user.service";

export default class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            content: ""
        };
    }

    componentDidMount() {
        UserService.getUserBoard().then(
            response => {
                this.setState({
                    content: response.data
                });
            },
            error => {
                this.setState({
                    content:
                    (error.response && error.response.data && serror.response.data.message ||
                        error.message ||
                        error.toString())
                });
            }
        );
    }
    
    render() {
        return(
            <div className="container">
                <header className="jumbotron"></header>
            </div>
        );
    }
}