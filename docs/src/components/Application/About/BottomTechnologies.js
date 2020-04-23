import React, { Component } from 'react';
import { Container } from 'reactstrap';
import HeaderSecondary from '../Components/HeaderSecondary';

export default class BottomTech extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="bottomTech">
                <HeaderSecondary headerSecondary="Other Technologies"/>
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
                        {this.renderIcon("java")}
                        {this.renderIcon("php")}
                        {this.renderIcon("c development")}
                        {this.renderIcon("python")}
                    </Container>
                    <Container className="row row-topTech">
                        {this.renderIcon("sql")}
                        {this.renderIcon("bash")}
                        {this.renderIcon("blockchain")}
                    </Container>
                </Container>
            );
        }
        else if (this.props.window < 900 && this.props.window > 600) {
            return (
                <Container>
                    <Container className="row row-topTech">
                        {this.renderIcon("java")}
                        {this.renderIcon("php")}
                        {this.renderIcon("c development")}
                    </Container>
                    <Container className="row row-topTech">
                        {this.renderIcon("sql")}
                        {this.renderIcon("bash")}
                    </Container>
                    <Container className="row row-topTech">
                        {this.renderIcon("blockchain")}
                        {this.renderIcon("python")}
                    </Container>
                </Container>
            );
        }
        return (
            <Container  className="bottomTech-icons">
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
