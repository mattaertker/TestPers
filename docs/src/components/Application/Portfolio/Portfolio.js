import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Tabs from '../Tabs/Tabs';

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container id="Portfolio" className="PortContainer">
                <Container className="PortContainer__cardContainer">
                    <Tabs/>
                </Container>
            </Container>
        );
    }
}