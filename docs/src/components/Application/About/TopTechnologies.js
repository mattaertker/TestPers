import React, { Component } from 'react';
import { Container } from 'reactstrap';
import HeaderSecondary from '../Components/HeaderSecondary';

export default class TopTech extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="topTech">
                <HeaderSecondary headerSecondary="Top Technologies"/>
                {/* <Container className="topTech-icons"> */}
                {this.decideFlex()}
                {/* </Container> */}
            </Container>
        );
    }

    decideFlex() {
        if (this.props.window > 900) {
            return (
                <Container>
                    <Container className="row row-topTech">
                        {this.renderIcon("html")}
                        {this.renderIcon("css")}
                        {this.renderIcon("scss")}
                        {this.renderIcon("react")}
                        {this.renderIcon("javascript")}
                    </Container>
                    <Container className="row row-topTech">
                        {this.renderIcon("jQuery")}
                        {this.renderIcon("node.js")}
                        {this.renderIcon("bootstrap")}
                        {this.renderIcon("angular")}
                    </Container>
                </Container>
            );
        }
        else if (this.props.window < 900 && this.props.window > 600) {
            return (
                <Container>
                    <Container className="row row-topTech">
                        {this.renderIcon("html")}
                        {this.renderIcon("css")}
                        {this.renderIcon("scss")}
                    </Container>
                    <Container className="row row-topTech">
                        {this.renderIcon("jQuery")}
                        {this.renderIcon("node.js")}
                        {this.renderIcon("react")}
                    </Container>
                    <Container className="row row-topTech">
                        {this.renderIcon("javascript")}
                        {this.renderIcon("bootstrap")}
                        {this.renderIcon("angular")}
                    </Container>
                </Container>
            );
        }
        return (
            <Container>
                <Container className="row row-topTech">
                    {this.renderIcon("html")}
                    {this.renderIcon("css")}
                    {this.renderIcon("scss")}
                    {this.renderIcon("jQuery")}
                    {this.renderIcon("node.js")}
                    {this.renderIcon("react")}
                    {this.renderIcon("javascript")}
                    {this.renderIcon("bootstrap")}
                    {this.renderIcon("angular")}
                </Container>
            </Container>
        );
    }

    renderIcon(id) {
        return (
            <Container className="col-1-of-5">
                <Container className="topTech-icon" id={id}>

                </Container>
            </Container>
        );
    }
}
