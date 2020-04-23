import React, {Component} from "react";
import {Container} from "reactstrap";

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentWindowWidth: window.innerWidth
        };
        this.windowSizeChange = this.windowSizeChange.bind(this);
        window.addEventListener('resize', this.windowSizeChange)


    }
    render() {
            return (
                <Container className="footer__home">
                    <Container className="footer__home-iconsContainer">
                        <div className="footer__home-iconsContainer-icon">
                            <div className="icon-container">
                                <i className="fa fa-phone"/>
                                <div className="text__small icon-container-text">719-510-6341</div>
                            </div>
                        </div>
                        <div className="footer__home-iconsContainer-icon">
                            <div className="iconAndTextContainer">
                                <div className="iconContainer">
                                    <i className="fa fa-envelope"/>
                                </div>
                                <div className="textContainer">
                                    <div>DigitalWebflex</div>
                                      <div>@gmail.com</div>
                                </div>
                            </div>
                        </div>
                        {this.getContactUsIcon()}
                    </Container>
                    <Container className="footer__home-copyright">
                        This website was built and designed by Matt Aertker &copy; Matt Aertker 2019.
                    </Container>
                </Container>
            );


    }

    getContactUsIcon() {
        if (this.state.currentWindowWidth > 467) {
            return(
                <div className="footer__home-iconsContainer-icon">
                    <div className="icon-container">
                        <i className="fa fa-mail-forward"/>
                        <div className="text__small icon-container-text">Contact Us</div>
                    </div>
                </div>
            );
        }
        else {
            return null;
        }

    }

    windowSizeChange() {
        this.setState({currentWindowWidth: window.innerWidth});
    };
}