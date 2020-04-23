import React, {Component} from "react";
import {Container} from "reactstrap";
import Waves from "../Components/wave";

export default class WaveSection extends Component {
    constructor(props) {
        super(props);
        this.setPagePortfolio = this.setPagePortfolio.bind(this);
    }

    render() {
        return (
            <Container className="showcase">
                <Waves className="showcase__container" id="showcase__container" setPagePortfolio={this.setPagePortfolio} setAppPage={this.props.setAppPage}/>
            </Container>
        );
    }

    setPagePortfolio() {
        this.props.setAppPage('portfolio');
    }
}