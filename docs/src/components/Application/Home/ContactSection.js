import React, {Component} from "react";
import {Container} from "reactstrap";
import ContactForm from "../Components/ContactForm";

export default class ContactSection extends Component {

    render() {
        return (
            <Container className="portfolio__home" id="Contact-Page">
                <Container className="portfolio__home-left"></Container>
                <Container className="portfolio__home-mid">
                    <div style={{marginTop: "3rem"}}>
                        <ContactForm/>
                    </div>
                </Container>
                <Container className="portfolio__home-right"></Container>
            </Container>
        );
    }
}