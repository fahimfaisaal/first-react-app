import React, { Component } from 'react';
import Bio from './Bio';
import './Profile.style.css';
import Skills from './Skills';
import SocialLinks from './SocialLinks';


class Profile extends Component {
    me = {
        name: 'Fahim Faisal',
        title: 'Noob frontend developer',
        skillA: 'C',
        skillB: 'java',
        skillC: 'javaScript',
        facebook: 'fahimfaisaal',
        linkedin: 'fahimfaisaal',
        github: 'fahimfaisaal',
        twitter: 'FahimFaisaal',
    }

    render() {
        const {
            name, title, skillA, skillB, skillC,
            facebook, linkedin, github, twitter
        } = this.me;
        
        return (
            <div className="container">
                <Bio name={ name } title={ title }/>
                <Skills skillA={ skillA } skillB={ skillB } skillC={ skillC }/>
                <SocialLinks facebook={ facebook } twitter={ twitter } linkedin={ linkedin } github={ github }/>
            </div>
        )
    }
}

export default Profile;