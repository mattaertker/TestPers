import React, {Component} from "react";
import {Container} from "reactstrap";
import ThreeDCube from "../Components/3dcube/threeDCube";


export default class CubeSection extends Component {
    render() {
        return (
            <Container id="Home" className="Home-container">
                <Container className="Home">
                    <h2 className="Home__header"><div className="Home__header-text">Matt Aertker</div></h2>
                    <h3 className="Home__header"><div className="Home__header-text Home__header-text-2">I'm a developer</div></h3>
                </Container>
                <div className="animation-area">
                    <ul className="box-area">
                        <li className="box-area-1"><ThreeDCube season="Fall"/></li>
                        <li className="box-area-2"><ThreeDCube season="Winter"/></li>
                        <li className="box-area-3"><ThreeDCube season="Forest"/></li>
                    </ul>
                </div>
            </Container>
        );
    }
}