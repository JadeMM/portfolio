import React from 'react';
import './css/AboutMe.css';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';

export default function EducationSection() {

    return (
        <div className='section'>
            <h3>Education</h3>
            <h5>Western Washington University</h5>
            <h6>Bachelor of Science, Computer Science</h6>
            <p>Relevant Coursework:</p>
            <p><i>Mobile Device Programming, Databases, Object-Oriented Design, and Social Network Analysis</i></p>
        </div>
    );
}
