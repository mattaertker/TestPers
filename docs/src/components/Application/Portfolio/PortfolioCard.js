import React, {Component} from 'react';
import {Container,CardText, Card, CardHeader, CardImg} from 'reactstrap';
import natours from'./natours.jpg';
import hotel from './hotel.jpg';
import csuBugZoo from './CsuBugZoo.jpg';
import medicare from './Medicare.jpg';

export default class PortfolioCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let source = this.getSource();

        return (
            <Container className="PortCardContainer">
                <Card key={this.props.PortKey} body outline className="PortCardContainer__card">
                    <Container className="PortCardContainer__cardText">
                        <CardHeader tag="h5" className='PortCardContainer__cardText-header'>{this.props.cardHeader}</CardHeader>
                        <CardImg className="PortCardContainer__cardText-shape" src={source}/>
                        <br></br>
                        <CardText className="PortCardContainer__cardText-description">{this.props.description}</CardText>
                        <a href={this.props.PortHref} target="_blank" className="button--white button--animated button PortCardContainer-btn">Visit</a>
                    </Container>
                </Card>
            </Container>
        );
    }

    getSource() {
        let source;
        if (this.props.source === "Natours"){
            source = natours;
        }
        if (this.props.source === "Hotel"){
            source = hotel;
        }
        if (this.props.source === "CsuBugZoo"){
            source = csuBugZoo;
        }
        if (this.props.source === "Medicare"){
            source = medicare;
        }

        return source;
    }
}