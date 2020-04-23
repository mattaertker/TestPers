import React from 'react';
import Application from "./Application/Application";
import Navigation from "./Margins/Navigation";

export default class App extends React.Component {
	constructor (props){
	    super(props);
	    this.pages = [
	      { title: 'Home', page: 'home'},
	      { title: 'Portfolio', page: 'portfolio'},	 
		  { title: 'Contact', page: 'contact'},
		  { title: 'About', page: 'about' }
	    ];
	    this.state = {
	      current_page: this.pages[0].page
	    };

	    this.setAppPage = this.setAppPage.bind(this);
	  }
	  
	  render() {
	      return (
	        <div className="appComp">
			  <Navigation pages={this.pages}
						  setAppPage={this.setAppPage}/>
			  <Application page={this.state.current_page}
						   pages={this.pages}
						   setAppPage={this.setAppPage}/>
	        </div>
	      );
	    }


	    setAppPage (page) {
	      this.setState({current_page: page});
	    }
}