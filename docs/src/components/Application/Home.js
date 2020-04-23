import React,{Component} from 'react'
import {Container} from 'reactstrap';
import Footer from "../Margins/Footer";
import CubeSection from "./Home/CubeSection";
import WaveSection from "./Home/WaveSection";
import IntroSection from "./Home/IntroSection";
import ContactSection from "./Home/ContactSection";

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container >
                <CubeSection/>
                <IntroSection setAppPage={this.props.setAppPage}/>
                <WaveSection setAppPage={this.props.setAppPage} />
                <ContactSection/>
                <Footer/>
            </Container>
        );
    }

}
