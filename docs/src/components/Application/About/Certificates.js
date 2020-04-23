import React, { Component } from 'react';
import { Container } from 'reactstrap';

export default class Certificates extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let pic = "card__picture card__picture--" + this.props.pitcureIndex;
        let span = "card__heading-span card__heading-span--" + this.props.pitcureIndex;
        let front = "card__side card__side-front card__side-front--" + this.props.pitcureIndex;
        let back = "card__side card__side-back card__side-back--" + this.props.pitcureIndex;
        return (
            <Container className="col-1-of-3">
                <Container className="card">
                    <Container className={front}>
                        <Container className={pic}>
                            &nbsp;
                    </Container>
                        <Container className="card__heading">
                            <span className={span}>{this.props.heading}</span>
                        </Container>
                    </Container>
                    <Container className="card__details">
                        <ul>
                            <li>Description: {this.props.description}</li>
                            <li>Completed: {this.props.completionDate}</li>
                            <li>Learned: {this.props.learned}</li>
                        </ul>
                    </Container>
                    <Container className={back}>
                        <Container className="card__side-back--header">

                        </Container>
                        <a href="#" className="btn btn--white">Visit Now!</a>
                    </Container>
                </Container>
            </Container>
        );

    }

}