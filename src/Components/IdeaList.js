import React from 'react'

const IdeaList = props => (
    <div className="IdeaList">
        <ul>
            {props.ideas.map((idea, i) =>
                <li key={i}>
                    <h3>{idea.title}</h3>
                    <p>{idea.description}</p>
                </li>
            )}
        </ul>
    </div>
);

export default IdeaList;
