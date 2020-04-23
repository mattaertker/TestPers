import React, {Component} from 'react';
import { Container } from 'reactstrap';

export default class HeaderSecondary extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <Container className="u-center-text u-margin-bottom">
                <Container className="header-secondary">
                    {this.props.headerSecondary}
                </Container>
            </Container>
        );
    }
}
