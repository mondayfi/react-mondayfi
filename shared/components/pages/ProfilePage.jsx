import React, { Component } from 'react';
import PyryPage from './PyryPage.jsx';
import SamuelPage from './SamuelPage.jsx';

// if (process.env.BROWSER) {
//     require('./FrontPage.scss');
// }

export default class ProfilePage extends Component {
	render() {
		const { name } = this.props;
		switch(name) {
		case 'pyry':
			return <PyryPage />;
		case 'samuel':
			return <SamuelPage />;
		default:
			return <div></div>;
		}
	}
}
