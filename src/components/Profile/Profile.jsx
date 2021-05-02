import React, { Component } from 'react';
import Bio from './Bio';
import './Profile.style.css';
import Skills from './Skills';
import SocialLinks from './SocialLinks';


class Profile extends Component {
    render() {
        return (
            <div className="container">
                <Bio />
                <Skills />
                <SocialLinks />
            </div>
        )
    }
}

export default Profile;