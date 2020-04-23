import React, {Component} from 'react';
import {Container} from "reactstrap";
import ContactForm from "../Components/ContactForm";
import user1 from './user1.jpg';

export default class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{width: 100 +"%"}} className="ContactPage-center" id="Contact">
                <Container className="ContactPage"/>
                <div className="ContactPage__container">
                    <div className="ContactPage-container">
                        <div className="ContactPage-headerContainer">
                            <div className="ContactPage-header">I look forward to meeting you!</div>
                        </div>
                        <div className="ContactPage__contactForm">
                            <img src={user1} style={{height: "20rem", width: "20rem", borderRadius: "5px"}} alt="user pic"/>
                        </div>
                        <ContactForm textColor="white" marBot="10rem"/>
                    </div>

                </div>
            </div>
        );
    }
}