import React from 'react';
import Card from 'react-bootstrap/Card';
import './page_selection.css';
import {
    Link
  } from "react-router-dom";
import { Component } from 'react';
import rotateButton from './resources/rotatebutton.jpg';

var degrees = 0;
  
export default class PageScreen extends Component {

	constructor (props) {
		super(props);
		this.state = {
			rotate: false
		}
	}

	
	handleClick() {
		var icon = document.getElementById("rotate_button");
		degrees -= 20;
		icon.style.transform = "rotate(" + degrees + "deg)";
	}

	render() {
		degrees = 0;
		return (
			<div className = "parent" style = {{margin: "20px"}}>
				<div style = {{marginBottom: "20px"}}>
					<Card className = "hoverable" bg = "light" text = "dark"> 
						<Link to = "/" style = {{textDecoration : "none", color : "black"}}>
							<Card.Body>
								<Card.Title>
									Back to Page Selection
								</Card.Title>
								<Card.Text>
								</Card.Text>
							</Card.Body>
						</Link>
					</Card>
				</div>
				<div>
					<img alt = "" src = {rotateButton} style = {{width: "80px", height: "80px"}} onClick={() => this.handleClick()} />
				</div>
				<div className = "parent_image">
					<img alt = "" src = {require('./resources/' + this.props.match.params.id + '.jpg').default} className = "ind_page" id = "rotate_button"/>
				</div>
			</div>
		)
	}
}
