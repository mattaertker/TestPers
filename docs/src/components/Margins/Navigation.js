import React, {Component} from 'react';
import { Navbar, Nav, Button} from 'reactstrap';

export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            currentWindowWidth: window.innerWidth,
            navToggle: null
        };

        this.toggle = this.toggle.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.renderNavItem = this.renderNavItem.bind(this);
        this.windowSizeChange = this.windowSizeChange.bind(this);

        window.addEventListener('resize', this.windowSizeChange)
    }


    render() {
        let pageLinks = window.innerWidth < 768 ? this.createNavButton() : this.createNormalNav();
        return (
            <div className="application-width">
                {pageLinks}
            </div>
        )
    }

    createNavButton() {
        let links = this.props.pages.map((item) => this.renderNavItem(item, 'navigation'));
        return (
            <div className="navigation">
                <input type="checkbox" className="navigation__checkbox" id="navi-toggle" onClick={this.toggleMenu}/>

                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>

                <div className="navigation__background">&nbsp;</div>
                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        {links}
                    </ul>
                </nav>
            </div>
        );
    }

    toggleMenu() {
        this.setState({
            navToggle: !this.state.navToggle
        });
    }

    createNormalNav() {
        let links = this.props.pages.map((item) => this.renderNormalNavItem(item, 'normNav'));
        return (
            <div className="normNav">
                <Navbar className="normNav__nav">
                    <Nav navbar className="normNav__nav-bar">
                        {links}
                    </Nav>
                </Navbar>
            </div>
        );
    }


    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    renderNavItem(info, type) {
        let updatePage = () => {
            this.toggleMenu();
            this.uncheckBox();
            this.props.setAppPage(info['page']);
        };
            return (
                <li className="navigation__item" key={type.concat("__key") + type.concat(info['title'])}>
                    <Button href={"#" + info['title']}
                            onClick={ updatePage }
                            className={type.concat("__link")}
                            key={type.concat(info['title'])}>
                        {info['title']}
                    </Button>
                </li>
            );
    }

    renderNormalNavItem(info, type) {
        let updatePage = () => {
            this.toggle();
            this.props.setAppPage(info['page']);
        };
        return (
            <Button onClick={ updatePage }
                    color='link'
                    key={type.concat(info['title'])}
                    className={type.concat('__item')}>
                {info['title']}
            </Button>
        );
    }

    uncheckBox() {
        document.getElementById("navi-toggle").checked = false;
    }


    windowSizeChange() {
        this.setState({currentWindowWidth: window.innerWidth});
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.windowSizeChange);
    }

}
