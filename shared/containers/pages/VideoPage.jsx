import React, { Component, PropTypes } from 'react';
import { connect }                     from 'react-redux';
import _ from 'lodash';

import { bindActionCreators } from 'redux';
import * as VideoActionCreators from '../../actions/videos';
import fetchOnUpdate from '../../decorators/fetchOnUpdate';
import connectDataFetchers from '../../lib/connectDataFetchers.jsx';
import EmbedEvents         from '../../utils/EmbedEventsUtil';
import config              from '../../config';
// import { sendEvent }       from '../../utils/googleAnalytics';
// import { makeSlug }        from '../../utils/urlUtil';

import VideoPage from '../../components/pages/VideoPage.jsx';

const embedEvents = new EmbedEvents({
    embedOrigin: config.embedOrigin
});

@connect(state => ({
  videos: state.videos
}), dispatch => ({
  actions: bindActionCreators(VideoActionCreators, dispatch)
}))
@fetchOnUpdate([ 'slug' ], (params, actions) => {
	console.log('jee')
  	actions.loadVideo(params.slug);
})
export default class VideoPageContainer extends Component {

    render() {
        const { videos } = this.props;
        const video = videos.video || {};
        return <VideoPage video={video} />;
    }
}

