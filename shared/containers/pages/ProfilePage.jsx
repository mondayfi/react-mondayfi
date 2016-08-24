import React, { Component, PropTypes } from 'react';
// import EmbedEvents         from '../../utils/EmbedEventsUtil';
// import config              from '../../config';
// import { sendEvent }       from '../../utils/googleAnalytics';
// import { makeSlug }        from '../../utils/urlUtil';

import ProfilePage from '../../components/pages/ProfilePage.jsx';

// const embedEvents = new EmbedEvents({
//     embedOrigin: config.embedOrigin
// });

export default class VideoPageContainer extends Component {

    render() {
    	const { routeParams: { name } } = this.props;
        return <ProfilePage name={name} />;
    }
}