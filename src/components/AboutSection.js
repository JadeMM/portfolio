import React from 'react';
import './css/AboutMe.css';

export default class AboutSection extends React.Component {
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
                <div className='section'>
                    <h3>About</h3>
                    <p>I recently graduated from Western Washington University with a Bachelor of Science degree in Computer Science. I am currently seeking a job as a Front-End Developer in the Greater Seattle Area, where I live now. I have experience with databases and front-end design implementation as these were my primary tasks in developing a roommate matching software for Opportunity Council in Bellingham, WA. I’m passionate and eager to expand my skills in this field. </p>
                </div>
            );
        }

        return (
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
        );
    }
}
