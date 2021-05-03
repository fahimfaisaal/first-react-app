import React from 'react';

const Skills = props => (
    <div className="skills">
    <h4>Skills: </h4>
        <ul>
            <li>{ props.skillA }</li>
            <li>{ props.skillB }</li>
            <li>{ props.skillC }</li>
        </ul>
    </div>
)

export default Skills;