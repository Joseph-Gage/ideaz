import React, { Component } from 'react'

class Ideas extends Component {
    constructor() {
        super();

        this.state = {
            ideas: []
        };

        this.fetchIdeas()
    }

    fetchIdeas() {
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
        return (
            <div className="Ideas">
                <h2>All Ideas</h2>
                <ul>
                    {this.state.ideas.map((idea, i) =>
                        <li key={i}>
                            <h3>{idea.title}</h3>
                            <p>{idea.description}</p>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Ideas;
