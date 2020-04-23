import React, { Component } from 'react';
import { Container } from 'reactstrap';
import TabContent from './TabContent';
import Natours from './Natours.jpg';
import Medicare from './G5_mac.jpg';
import BugZoo from './CSU_volunteers.jpg';
import Hotel from './Hotel.jpg';
import MattA from './MattAertker.jpg';
import MattAIphone from './persIphone.jpg';
import MattAIpad from './MattAIpad.jpg';
import NatIphone from './natIphone.jpg';
import TabsOption from './TabsOption';
import NatIpad from './NatIpad.jpg';
import bugZooIphone from './images/bugZoo-iphone.jpg';
import bugZooIpad from './images/bugZoo-ipad.jpg';
import G5Ipad from './images/G5-ipad.jpg';
import MedicareIphone from './images/MedicareIphone.jpg';
import HotelIphone from './images/trillo-iphone.jpg';
import HotelIpad from './images/trillo-ipad.jpg';



//TODO: take the multiple toggle functions and make them just accept a variable then have a switch statement and toggle accordingly



export default class Tabs extends Component {
    constructor(props) {
        super(props);
        this.toggleNatours = this.toggleNatours.bind(this);
        this.toggleMedicare = this.toggleMedicare.bind(this);
        this.toggleHotel = this.toggleHotel.bind(this);
        this.toggleBugZoo = this.toggleBugZoo.bind(this);
        this.displayDiv = this.displayDiv.bind(this);
        // this.toggleFlightTrip = this.toggleFlightTrip.bind(this);
        this.rotateToMedicare = this.rotateToMedicare.bind(this);
        this.rotateToHotel = this.rotateToHotel.bind(this);
        this.rotateToPersonal = this.rotateToPersonal.bind(this);
        this.rotateToBugZoo = this.rotateToBugZoo.bind(this);
        this.togglePersonal = this.togglePersonal.bind(this);
        this.state = {
            isPersonal: true,
            isNatours: false,
            isMedicare: false,
            isHotel: false,
            isBugZoo: false,
            userClick: false,
            currentTab: ''
            // isFlightTrip: false
        }
    }


    render() {
        return (
            <div style={{ overflowY: "scroll" }}>
                {this.renderTabs()}
                {/* {this.displayDiv()} */}
                <Container className="Tabs">
                    <Container className="Tabs__option">
                        <input type="radio" className="Tabs__option-input"
                            id="Personal" name="project" onChange={this.togglePersonal} checked={this.state.isPersonal ? this.state.isPersonal : null} />
                        <label htmlFor="Personal" className="Tabs__option-label">
                            <span className="Tabs__option-btnContainer">
                                <span className="Tabs__option-button"></span>
                            </span>
                            <span className="Tabs__option-text" id="Tabs__option-text" style={{ paddingLeft: "3rem" }}>Personal Site</span>
                        </label>
                    </Container>
                    <TabsOption toggle={this.toggleNatours}
                        id="Natours"
                        header="Natours" />
                    <TabsOption toggle={this.toggleMedicare}
                        id="MedicareReimbursements"
                        header="Medicare Reimbursements"
                        paddingLeft="4rem" />
                    <TabsOption toggle={this.toggleHotel}
                        id="Hotel"
                        header="Hotel" />
                    <TabsOption toggle={this.toggleBugZoo}
                        id="CsuBugZoo"
                        header="CSU bug zoo volunteers"
                        paddingLeft="5rem" />
                </Container>
            </div>


        )

    }

    renderTabs() {
        // if (!this.state.userClick)
        //     this.displayDiv();

        if (this.state.isPersonal) {
            return (
                <TabContent header="Personal Portfolio"
                    macImage={MattA}
                    iphoneImage={MattAIphone}
                    id="TabContent__Personal"
                    ipadImage={MattAIpad}
                    pers={true}
                    techUsed={"The technologies being used for this project are React and SCSS."}
                    introText={"Some challenges with this project were solidifying my knowledge of SCSS and React while also learning more about how to implement the necessary React or javascript for certain design aspects of the website."}
                    goal={"This project started in January of 2020 with the goal of refining my skills in React for the purpose of designing a website that can showcase the various projects I've completed during my time at Colorado State University."}
                    visit={"https://mattaertker.github.io/MattAertker/"}
                    github={"https://github.com/mattaertker/MattAertker"} />
            )
        }
        if (this.state.isNatours) {
            return (
                <TabContent header="Natours"
                    macImage={Natours}
                    iphoneImage={NatIphone}
                    ipadImage={NatIpad}
                    nat={true}
                    id="TabContent__Natours"
                    goal={"This project began during the Summer of 2019 in order to develop a solid foundation of Advanced CSS in order to expand into more complex languages such as SCSS. This foundation in Advanced CSS also helped as I went about designing my own website."}
                    introText={"The biggest challenge with this project was learning how to calculate em and rem (website width/height measurement units), along with many other intricate details and design tips for future projects."}
                    techUsed={"The technologies used for this project were HTML 5 and CSS."}
                    visit={"https://mattaertker.github.io/Natours/"}
                    github={"https://github.com/mattaertker/Natours"} />

            )
        }
        if (this.state.isHotel) {
            return (
                <TabContent header="Hotel"
                    macImage={Hotel}
                    iphoneImage={HotelIphone}
                    ipadImage={HotelIpad}
                    hot={true}
                    id="TabContent__Hotel"
                    goal={"This project was started during the Summer of 2019 with the goal of practicing a second form of Advanced SCSS with Flexbox while at the same time furthuring my knowledge of SVG's and animations."}
                    techUsed={"The technologies used for this project were HTML 5 and SCSS."}
                    introText={"The biggest challenge with this project was learning how to manipulate the SVG's and how to make images responsive."}
                    visit={"https://mattaertker.github.io/HotelSite/"}
                    github={"https://github.com/mattaertker/HotelSite"} />
            )
        }
        if (this.state.isMedicare) {
            return (
                <TabContent header="Medicare Reimbursements"
                    macImage={Medicare}
                    iphoneImage={MedicareIphone}
                    ipadImage={G5Ipad}
                    med={true}
                    id="TabContent__Medicare"
                    goal={"This project was completed with 3 other group members in Spring of 2019 and was one of the first big website development projects I've done. The goal of this website was to efficiently perform the calculations for 5000 different hospitals' Medicare Reimbursements."}
                    introText={"The challenges faced for this project were laerning how to connect a database to our project, manipulate images to look good on most devices, and perform some of the algorithms for the calculationss of the reimbursement."}
                    techUsed={"The technologies used for this project were HTML 5, Fuel MVC, Javascript, jQuery, and CSS."}
                    visit={"https://www.cs.colostate.edu/~maertker/ct310/m4/index/project"} />
            )
        }
        if (this.state.isBugZoo) {
            return (
                <TabContent header="CSU Bug Zoo"
                    macImage={BugZoo}
                    iphoneImage={bugZooIphone}
                    ipadImage={bugZooIpad}
                    bug={true}
                    id="TabContent__BugZoo"
                    goal={"Although currently in progress, this website will hopefully be used by the CSU Bug Zoo volunteers as a guide to effectively care for the various species of bugs at the Zoo."}
                    introText={"The main challenges I am currently encountering are getting the accommodations for all disabilities within this website to work so it can be used by volunteers for the CSU bug zoo."}
                    techUsed={"The technologies being used for this project are HTML 5 and SCSS."}
                    visit={"https://mattaertker.github.io/BugZooVolunteers/"}
                    github={"https://github.com/mattaertker/BugZooVolunteers"} />
            )
        }
        document.getElementsByClassName("TabContent").style.opacity = 1;
        return null;
    }

    togglePersonal() {
        this.setState({
            isPersonal: true,
            isNatours: false,
            isHotel: false,
            isMedicare: false,
            isBugZoo: false,
            userClick: true
            // isFlightTrip: false
        });
    }

    toggleNatours() {
        this.setState({
            isPersonal: false,
            isNatours: true,
            isHotel: false,
            isMedicare: false,
            isBugZoo: false,
            userClick: true
            // isFlightTrip: false
        });
    }

    toggleHotel() {
        this.setState({
            isPersonal: false,
            isNatours: false,
            isHotel: true,
            isMedicare: false,
            isBugZoo: false,
            userClick: true
            // isFlightTrip: false
        });
    }

    toggleMedicare() {
        this.setState({
            isPersonal: false,
            isNatours: false,
            isHotel: false,
            isMedicare: true,
            isBugZoo: false,
            userClick: true
            // isFlightTrip: false
        });
    }
    toggleBugZoo() {
        this.setState({
            isPersonal: false,
            isNatours: false,
            isHotel: false,
            isMedicare: false,
            isBugZoo: true,
            userClick: true
            // isFlightTrip: false
        });
    }
    displayDiv() { 
        if (this.state.isPersonal) {
            setTimeout(() => {
                if (!this.state.userClick) {
                    this.setState({
                        isPersonal: false,
                        isNatours: true,
                        isHotel: false,
                        isMedicare: false,
                        isBugZoo: false,
                    });
                    document.getElementById("Personal").checked = false;
                    document.getElementById("Natours").checked = true;
                    document.getElementById('TabContent__Natours').animate([
                        { opacity: 0, transform: 'translateY(5rem)' },
                        { opacity: 1, transform: 'translateY(0)' }
                    ], 2000);
                    this.rotateToMedicare();
                }
            }, 5000);
        }
    } 

    rotateToMedicare() {
        if (this.state.isNatours) {
            setTimeout(() => {
                if (!this.state.userClick) {
                    this.setState({
                        isPersonal: false,
                        isNatours: false,
                        isHotel: false,
                        isMedicare: true,
                        isBugZoo: false,
                    })
                    document.getElementById("Natours").checked = false;
                    document.getElementById("MedicareReimbursements").checked = true;
                    document.getElementById('TabContent__Medicare').animate([
                        { opacity: 0, transform: 'translateY(5rem)' },
                        { opacity: 1, transform: 'translateY(0)' }
                    ], 2000);
                    this.rotateToHotel();
                }
            }, 5000);
        }
    }

    rotateToHotel() {
        if (this.state.isMedicare) {
            setTimeout(() => {
                if (!this.state.userClick) {
                    this.setState({
                        isPersonal: false,
                        isNatours: false,
                        isHotel: true,
                        isMedicare: false,
                        isBugZoo: false,
                    })
                    document.getElementById("MedicareReimbursements").checked = false;
                    document.getElementById("Hotel").checked = true;
                    document.getElementById('TabContent__Hotel').animate([
                        { opacity: 0, transform: 'translateY(5rem)' },
                        { opacity: 1, transform: 'translateY(0)' }
                    ], 2000);
                    this.rotateToBugZoo();
                }
            }, 5000);
        }
    }

    rotateToBugZoo() {
        if (this.state.isHotel) {
            setTimeout(() => {
                if (!this.state.userClick) {
                    this.setState({
                        isPersonal: false,
                        isNatours: false,
                        isHotel: false,
                        isMedicare: false,
                        isBugZoo: true,
                    })
                    document.getElementById("Hotel").checked = false;
                    document.getElementById("CsuBugZoo").checked = true;
                    document.getElementById('TabContent__BugZoo').animate([
                        { opacity: 0, transform: 'translateY(5rem)' },
                        { opacity: 1, transform: 'translateY(0)' }
                    ], 2000);
                    this.rotateToPersonal();
                }
            }, 5000);
        }
    }

    rotateToPersonal() {
        if (this.state.isBugZoo) {
            setTimeout(() => {
                if (!this.state.userClick) {
                    this.setState({
                        isPersonal: true,
                        isNatours: false,
                        isHotel: false,
                        isMedicare: false,
                        isBugZoo: false,
                    })
                    document.getElementById("CsuBugZoo").checked = false;
                    document.getElementById("Personal").checked = true;
                    document.getElementById('TabContent__Personal').animate([
                        { opacity: 0, transform: 'translateY(5rem)' },
                        { opacity: 1, transform: 'translateY(0)' }
                    ], 2000);
                    // this.displayDiv();
                }
            }, 5000);
        }
    }

}