import React, {Component} from 'react';
import me from '../assets/me.jpg'
import SkillsShowcase from "./SkillsShowcase";


class AboutPage extends Component {
    decideImageHeight = () => {
        if (window.innerWidth > 550)
            return 240
        else if (window.innerWidth > 400)
            return 150
        else
            return 125
    }

    render() {
        return (
            <React.Fragment>
                <div className="aboutContainer">
                    {window.innerWidth <= 420 &&
                    <div align="center" className="nameHeading">Hi I am <strong>Tarun Luthra</strong></div>}
                    <div className="row">
                        <div className="col-lg-3"/>
                        <div className="col-md-3 col-sm-5 col-5">
                            <img src={me} height={this.decideImageHeight()}/>
                        </div>
                        <div className="col-md col-sm col">
                            <br/>
                            {window.innerWidth > 420 &&
                            <div className="nameHeading">Hi I am <strong>Tarun Luthra</strong></div>}
                            <p className="introductionText">
                                I am a Computer Science undergrad.
                                I am a proficient competitive programmer with advanced Algo-DS skills and a trained web
                                developer.
                                I love to create web apps with React and Ember.
                            </p>
                        </div>
                    </div>
                </div>
                <SkillsShowcase/>
            </React.Fragment>
        )
            ;
    }
}

export default AboutPage;