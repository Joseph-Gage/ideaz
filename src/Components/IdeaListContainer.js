import React, { Component } from 'react'
import IdeaList from './IdeaList'

class IdeaListContainer extends Component {
    constructor() {
        super();

        this.state = {
            ideas: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/ideas', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(results => {
            return results.json();
        }).then(json => {
            this.setState({ ideas: json })
        });
    };

    render() {
        return <IdeaList ideas={this.state.ideas}/>
    }
}

export default IdeaListContainer;
