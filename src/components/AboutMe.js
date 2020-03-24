import React from 'react';
import './css/App.css';

export default function AboutMe() {

    return (
        <div className='background'>
            <div className='section'>
                <table >
                    <tbody>
                        <tr>
                            <td>
                                <img alt='pizza' src={require('./images/profile.jpg')} />
                            </td>
                            <td>
                                <h3>About</h3>
                                <p>I recently graduated from Western Washington University with a Bachelor of Science degree in Computer Science. I am currently seeking a job as a Front-End Developer in the Greater Seattle Area, where I live now. I have experience with databases and front-end design implementation as these were my primary tasks in developing a roommate matching software for Opportunity Council in Bellingham, WA. I’m passionate and eager to expand my skills in this field. </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <table >
                <tbody>
                    <tr>
                        <td>
                            <div className='section'>
                                <h3>Experience</h3>
                                <p><b>Cognixia</b>- Redmond, WA January 2020 - March 2020 </p>
                                <p><i>React Developer </i></p>
                                <ul>
                                    <li className='resumeList'>Engaged in a development program where I was able to work on projects using the following technologies: 
                                            React Essentials, Modern React with Redux, HTML5, CSS3, and JavaScript, Microsoft SQL, JSON, NPM, D3.js, Node JS, , Rest API and Webservices, MongoDB </li>
                                </ul>

                                <p><b>Rainier Scholars</b>- Seattle, WA   July 2020 - January 2020 </p>
                                <p><i>Computer Science Teacher </i></p>
                                <ul>
                                    <li className='resumeList'>
                                        Taught young student the basics of coding with TechSmart’s drag and drop coding language Skylark  
                                    </li>
                                    <li className='resumeList'>
                                        Helped to develop a curriculum for improving computer skills for children, such as emailing, file system management, using a word processor. 
                                    </li>
                                </ul>
                            </div>

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
                        </td>
                        <td>
                            <div className='section'>
                                <h3>Languages and Technologies</h3>
                                <ul>
                                    <li className='resumeList'>React</li>
                                    <li className='resumeList'>Java</li>
                                    <li className='resumeList'>C</li>
                                    <li className='resumeList'>HTML5</li>
                                    <li className='resumeList'>CSS</li>
                                    <li className='resumeList'>SQL</li>
                                    <li className='resumeList'>Node, npm, JSON</li>
                                    <li className='resumeList'>MongoDB</li>
                                </ul>
                            </div>

                            <div className='section'>
                                <h3>Education</h3>
                                <h5>Western Washington University</h5>
                                <h6>Bachelor of Science, Computer Science</h6>
                                <p>Relevant Coursework:</p>
                                <p><i>Mobile Device Programming, Databases, Object-Oriented Design, and Social Network Analysis</i></p>
                                  
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
