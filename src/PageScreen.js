import React from 'react';
import './page_selection.css';
import { Component } from 'react';
import * as All from './util/PageScreenUtil';

export default class PageScreen extends Component {

	render() {
		let MyComponent = All[this.props.match.params.id];
		return <MyComponent/>
	}
}
