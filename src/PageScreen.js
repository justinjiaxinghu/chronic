import React from 'react';
import './page_selection.css';
import { Component } from 'react';
import * as All from './util/PageScreenUtil';

export default class PageScreen extends Component {

	render() {
		if (this.props.match.params.id == "page1") {
			return (
				<All.PageScreen1/>
			)
		} else if (this.props.match.params.id == "page2") {
			return (
				<All.PageScreen2/>
			)
		} else if (this.props.match.params.id == "page3") {
			return (
				<All.PageScreen3/>
			)
		} else if (this.props.match.params.id == "page4") {
			return (
				<All.PageScreen4/>
			)
		} else if (this.props.match.params.id == "page5") {
			return (
				<All.PageScreen5/>
			)
		} else if (this.props.match.params.id == "page6") {
			return (
				<All.PageScreen6/>
			)
		}
	}
}
