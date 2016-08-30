import React, { Component, PropTypes } from 'react';
import ProfilePage from '../../components/pages/ProfilePage.jsx';

export default class VideoPageContainer extends Component {

    render() {
    	const { routeParams: { name } } = this.props;
        return <ProfilePage name={name} />;
    }
}