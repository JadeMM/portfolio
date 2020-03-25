import React from 'react';
import './css/AboutMe.css';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import LanguagesSection from './LanguagesSection';
import EducationSection from './EducationSection';

export default class AboutMe extends React.Component {
    constructor() {
        super();
        this.state = {
            width: window.innerWidth
        }
    }

    componentDidMount = () => {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({width: window.innerWidth});
    }

    render() {
        const isMobile = this.state.width <= 700;
        console.log(this.state.width)
        if (isMobile) {
            return (
                <div className='background'>
                    <AboutSection/>
                    <ExperienceSection/>
                    <ProjectsSection/>
                    <LanguagesSection/>
                    <EducationSection/>
                </div>
            );
        } else {
            return (
                <div className='background'>
                    <AboutSection/>
                    <table >
                        <tbody>
                            <tr>
                                <td>
                                    <ExperienceSection/>
                                    <ProjectsSection/>
                                </td>
                                <td>
                                    <LanguagesSection/>
                                    <EducationSection/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}
