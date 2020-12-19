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
		}
	}
}
