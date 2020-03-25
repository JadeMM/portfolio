import React from 'react';
import './css/AboutMe.css';

export default function ProjectsSection() {

    return (
        <div className='section'>
            <h3>Additional Projects and Technologies </h3>
            <h5>Roommate Matcher </h5>
            <ul>
                <li className='resumeList'>
                    Successfully completed roommate matching software for Opportunity Council,
                    a non-profit housing agency serving Watcom County
                </li>
                <li className='resumeList'>
                    Designed and implemented the user interface and matching algorithm using Electron,
                    MySQL, HTML, CSS, JavaScript, NPM, and JSON.
                </li>
            </ul>

            <h5>Recipe Collection App</h5>
            <ul>
                <li className='resumeList'>
                    Used Android Studio to create a recipe collection mobile app implemented with Java and SQLite</li>
                <li className='resumeList'>
                    Built 'create new recipe' and 'find recipe by ingredient' functionality using the local file system on the device to store recipes
                </li>
            </ul>
        </div>
    );
}
