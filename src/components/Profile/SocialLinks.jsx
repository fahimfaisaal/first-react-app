import React from 'react';

const SocialLinks = props => (
    <div className="social-links">
        <ul>
            <li><a href={ "https://www.facebook.com/" + props.facebook} target="_blank">Facebook</a></li>
            <li><a href={ "https://www.twitter.com/" + props.twitter} target="_blank">Twitter</a></li>
            <li><a href={ "https://www.linkedin.com/" + props.linkedin} target="_blank">LinkedIn</a></li>
            <li><a href={ "https://www.github.com/" + props.github} target="_blank">Github</a></li>
            </ul>
    </div>
)

export default SocialLinks;