import React, { Component, PropTypes } from 'react';
import { connect }                     from 'react-redux';
import _ from 'lodash';

import { loadVideo } from '../../actions/videos';
import connectDataFetchers from '../../lib/connectDataFetchers.jsx';
import EmbedEvents         from '../../utils/EmbedEventsUtil';
import config              from '../../config';
// import { sendEvent }       from '../../utils/googleAnalytics';
// import { makeSlug }        from '../../utils/urlUtil';

import VideoPage from '../../components/pages/VideoPage.jsx';

const embedEvents = new EmbedEvents({
    embedOrigin: config.embedOrigin
});

class VideoPageContainer extends Component {

    render() {
        const { video } = this.props;
        return <VideoPage video={video} />;
    }
}

function mapStateToProps({loadVideo: {video}}) { 
    return { video };
}

export default connect(mapStateToProps)(
    connectDataFetchers(VideoPageContainer, [ loadVideo ])
);
