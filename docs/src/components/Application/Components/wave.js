import React, {Component} from 'react'
import WAVES from '../../../../src/vanta.waves.min';
import * as THREE from 'three'
import Button from "react-bootstrap/Button";

class Waves extends Component {
    constructor(props) {
        super(props);
        this.vantaRef = React.createRef()
    }
    componentDidMount() {
        this.vantaEffect = WAVES({
            el: this.vantaRef.current,
            color: 0x30197d,
            mouseControls: false,
            touchControls: false,
            THREE: THREE
        })
    }
    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
    }
    render() {
        if (!window.WebGLRenderingContext){
            window.location = "http://get.webgl.org";
            return <Button className="button button--animated button--white"
                           onClick={this.props.setAppPage("Portfolio")} href="#Portfolio">Portfolio</Button>
        }
        return <div ref={this.vantaRef} className="showcase__container">
            <Button className="button button--animated button--white" href="#Portfolio" onClick={this.props.setPagePortfolio}>Portfolio</Button>
        </div>
    }
}

export default Waves;