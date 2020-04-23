import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Challenge from './challenge.jpg';
import Goal from './goal.jpg';
import Natours from './Natours.jpg';

export default class Tabs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="master">
                <div className="TabContent" id={this.props.id} onChange={this.animatePage()}>
                    <Container className="TabContent__header">{this.props.header}</Container>
                    <Container className="TabContent__images">
                        <img className="TabContent__images-left" src={this.props.iphoneImage} alt="leftImage" />
                        <img className="TabContent__images-mid" src={this.props.macImage} alt="midImage" />
                        <img className="TabContent__images-right" src={this.props.ipadImage} alt="rightImage" />
                    </Container>
                    <Container className="TabContent__link">
                        <a className="TabContent__link-left" href={this.props.github} target="_blank">View Code</a>
                        <a className="TabContent__link-right" href={this.props.visit} target="_blank">View Site</a>
                    </Container>
                    <Container className="TabContent__description">
                        <Container className="TabContent__description-tech">
                            {/* <span className="TabContent__description-intro-challenge"> */}
                            <Container className="TabContent__description-tech-Left">{"</> "}</Container>
                            <span className="TabContent__description-tech-Left-tech">Technology</span>
                            {/* </span>      */}
                            <Container className="TabContent__description-tech-right">{this.props.techUsed}</Container>
                        </Container>
                        <Container className="TabContent__description-intro">
                            <span className="TabContent__description-intro-challenge">
                                <img className="TabContent__description-intro-Left" src={Challenge} alt="challenge" />
                                <span className="TabContent__description-tech-Left-tech">Challenges</span>
                            </span>
                            <Container className="TabContent__description-intro-right">{this.props.introText}</Container>
                        </Container>
                        <Container className="TabContent__description-goal">
                            <Container className="TabContent__description-goal-Left">
                                <img className="TabContent__description-goal-Left-1" src={Goal} alt="challenge" />
                                <span className="TabContent__description-goal-Left-2">Goal</span>
                            </Container>
                            <Container className="TabContent__description-goal-right">{this.props.goal}</Container>
                        </Container>
                    </Container>
                </div>
                {/* {this.animatePage()} */}
            </div>
        )
    }

    animatePage() {
        // setTimeout(() => {
            if (document.getElementById('TabContent__Personal')) {
                document.getElementById('TabContent__Personal').animate([
                    { opacity: 0, transform: 'translateY(5rem)' },
                    { opacity: 1, transform: 'translateY(0)' }
                ], 2000);
            }
            if (document.getElementById('TabContent__Natours')) {
                document.getElementById('TabContent__Natours').animate([
                    { opacity: 0, transform: 'translateY(5rem)' },
                    { opacity: 1, transform: 'translateY(0)' }
                ], 2000);
            }
            if (document.getElementById('TabContent__Medicare')) {
                document.getElementById('TabContent__Medicare').animate([
                    { opacity: 0, transform: 'translateY(5rem)' },
                    { opacity: 1, transform: 'translateY(0)' }
                ], 2000);
            }
            if (document.getElementById('TabContent__Hotel')) {
                document.getElementById('TabContent__Hotel').animate([
                    { opacity: 0, transform: 'translateY(5rem)' },
                    { opacity: 1, transform: 'translateY(0)' }
                ], 2000);
            }
            if (document.getElementById('TabContent__BugZoo')) {
                document.getElementById('TabContent__BugZoo').animate([
                    { opacity: 0, transform: 'translateY(5rem)' },
                    { opacity: 1, transform: 'translateY(0)' }
                ], 2000);
            }
            else {
                return;
            }
        // },5000);
    }
}