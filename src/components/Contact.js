import React from 'react';
import './css/App.css';

export default function AboutMe() {

    return (
        <div className='section'>
            <h3>You can contact me at:</h3>
            <div className='section'>
                <p><a href="mailto:jade.moksness@gmail.com" target="_top">jade.moksness@gmail.com</a></p>
                <p><a href='https://www.linkedin.com/in/jademoksness'>linkedin.com/in/jademoksness</a></p>
                <p><a href='http://github.com/JadeMM'>github.com/JadeMM</a></p>
            </div>
        </div>
    );
}
