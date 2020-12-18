import React from 'react';
import Card from 'react-bootstrap/Card';
import './page_selection.css';
import {
    Link
  } from "react-router-dom";
import { Component } from 'react';
import rotateButton from './resources/rotatebutton.jpg';
import * as All from './util/index.js';

export default class PageScreen extends Component {

	// constructor (props) {
	// 	super(props);
	// 	this.state = {
	// 		degrees: 0
	// 	}
	// }
	
	// handleClick() {
	// 	var icon = document.getElementById("rotate_button");
	// 	var temp = this.state.degrees - 20;
	// 	this.setState({degrees : temp}, function() { //ensures that state has been changed 
	// 		icon.style.transform = "rotate(" + this.state.degrees + "deg)";
	// 	})
	// }

	// render() {
	// 	return (
	// 		<div className = "parent" style = {{margin: "20px"}}>
	// 			<div style = {{marginBottom: "20px"}}>
	// 				<Card className = "hoverable" bg = "light" text = "dark"> 
	// 					<Link to = "/" style = {{textDecoration : "none", color : "black"}}>
	// 						<Card.Body>
	// 							<Card.Title>
	// 								Back to Page Selection
	// 							</Card.Title>
	// 							<Card.Text>
	// 							</Card.Text>
	// 						</Card.Body>
	// 					</Link>
	// 				</Card>
	// 			</div>
	// 			<div>
	// 				<img alt = "" src = {rotateButton} style = {{width: "80px", height: "80px"}} onClick={() => this.handleClick()} />
	// 			</div>
	// 			<div className = "parent_image">
	// 				{/* need to use default for some reason, react is trying to access build version of image */}
	// 				<img alt = "" src = {require('./resources/' + this.props.match.params.id + '.jpg').default} className = "ind_page" id = "rotate_button"/>
	// 			</div>
	// 		</div>
	// 	)
	// }

	render() {
		if (this.props.match.params.id == "page1") {
			return (
				<All.PageScreen1/>
			)
		} else if (this.props.match.params.id == "page2") {
			return (
				<All.PageScreen2/>
			)
		}
	}
}
