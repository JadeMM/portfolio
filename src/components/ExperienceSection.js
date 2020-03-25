import React from 'react';
import './css/AboutMe.css';

export default function ExperienceSection() {

    return (
        <div className='section'>
            <h3>Experience</h3>
            <p><b>Cognixia</b>- Redmond, WA January 2020 - March 2020 </p>
            <p><i>React Developer </i></p>
            <ul>
                <li className='resumeList'>Engaged in a development program where I was able to work on projects using the following technologies: 
                        React Essentials, Modern React with Redux, HTML5, CSS3, and JavaScript, Microsoft SQL, JSON, NPM, D3.js, Node JS, Rest API and Webservices, MongoDB </li>
            </ul>

            <p><b>Rainier Scholars</b>- Seattle, WA   July 2020 - January 2020 </p>
            <p><i>Computer Science Teacher </i></p>
            <ul>
                <li className='resumeList'>
                    Taught young student the basics of coding with TechSmart’s drag and drop coding language Skylark  
                </li>
                <li className='resumeList'>
                    Helped to develop a curriculum for improving computer skills for children, such as emailing, file system management, and using a word processor. 
                </li>
            </ul>
        </div>
    );
}
