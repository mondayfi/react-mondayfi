import React, { Component, PropTypes } from 'react';
import { connect }                     from 'react-redux';

import { loadVideos } from '../../actions/videos';
import connectDataFetchers from '../../lib/connectDataFetchers.jsx';
import EmbedEvents         from '../../utils/EmbedEventsUtil';
import config              from '../../config';
// import { sendEvent }       from '../../utils/googleAnalytics';
// import { makeSlug }        from '../../utils/urlUtil';

import FrontPage from '../../components/pages/FrontPage.jsx';

const embedEvents = new EmbedEvents({
    embedOrigin: config.embedOrigin
});

class IndexPageContainer extends Component {

    render() {
        // console.log(this.props)
        return <FrontPage />;
    }
}

function mapStateToProps(videosArgs) {
    // console.log(videosArgs)
    const { videos } = videosArgs;
    return {
        videos
    };
}

export default connect(mapStateToProps)(
    connectDataFetchers(IndexPageContainer, [ loadVideos ])
);
