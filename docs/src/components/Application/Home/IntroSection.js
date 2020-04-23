import React, {Component} from "react";
import {Button, Container} from "reactstrap";

export default class IntroSection extends Component {
    constructor(props) {
        super(props);
        this.setPageAbout = this.setPageAbout.bind(this);
    }


    render() {
        return (
            <Container className="intro">
                <Container className="intro-text moveInBottom fadeInUp">
                    Hello, are you in need of a passionate, hard-working developer? Search no more,
                    because I am ready for the job! With almost 4 years of experience through classes
                    with Colorado State University, personal projects, and multiple online courses, I
                    can step into almost any role and succeed! <a href="#Contact-Page" className="intro-Contact-link">Contact me today!</a>
                </Container>
                <Button className="button button--animated button--gradient intro-button" href="#About" onClick={this.setPageAbout}>About Me</Button>
            </Container>
        );
    }

    setPageAbout() {
        this.props.setAppPage('about');
    }
}