import React from 'react';
import Card from 'react-bootstrap/Card';
import './page_selection.css';
import {
    Link
  } from "react-router-dom";
import { Component } from 'react';
import rotateButton from './resources/rotatebutton.jpg'
  
export default class PageScreen extends Component {

	constructor (props) {
		super(props);
		this.state = {
			rotate: false
		}
	}

	handleClick() {
		var rotate_state = this.state;
		var icon = document.getElementById("rotate_button");
		if (rotate_state) {
			icon.className = "ind_page_rotate";
		} else {
			icon.className = "ind_page";
		}
		//this.setState({rotate : !rotate_state});
	}

	render() {
		
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
