import React, { Component } from 'react';
import { Container, CardText, Card, CardHeader, CardImg } from 'reactstrap';
import MattImg from './user.jpg';
import Certificates from './Certificates';
import HeaderSecondary from '../Components/HeaderSecondary';
import TopTech from './TopTechnologies';
import BottomTech from './BottomTechnologies';

let people = [
    {
        bio: "Hello, my name is Matt Aertker. I am pursuing a bachelors degree in applied computing " +
            "technologies with a concentration in computing technology. I am also pursuing a minors in " +
            "business administration. I love web development, software development, and problem solving. In my " +
            "spare time, I love to snowboard and teach myself new things!"
    }
];

export default class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container id="About" className="About">
                <Container className="About__top">
                    This will contain a photo of me with a brief description of me to the right of the photo
                    but on mobil overlaying over my photo
                </Container>
                <Container className="About__certificates">
                    <HeaderSecondary headerSecondary="Certificates" />
                    {this.getFlexTypeForCertficiates()}
                </Container>
                <Container className="About__mid">
                    <TopTech window={this.props.windowSizeChange}/>
                    <Container className="About__mid-border">

                    </Container>
                </Container>
                <Container className="About__bottom">
                    <BottomTech window={this.props.windowSizeChange}/>
                </Container>
            </Container>

        );
    }

    getFlexTypeForCertficiates() {
        if (this.props.windowSizeChange > 1500) {
            return (
                <Container>
                    <Container className="row-cert">
                        <Certificates />
                        <Certificates />
                        <Certificates />
                        <Certificates />
                    </Container>
                </Container>
            );
        }
        return (
            <Container>
                <Container className="row-cert">
                    <Certificates />
                    <Certificates />
                </Container>
                <Container className="row-cert">
                    <Certificates />
                    <Certificates />
                </Container>
            </Container>
        );
    }
}
