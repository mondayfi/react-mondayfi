import React, { Component, PropTypes } from 'react';
import { connect }                     from 'react-redux';
import _ from 'lodash';

import { loadVideo }        from '../../actions/videos';
import connectDataFetchers  from '../../lib/connectDataFetchers.jsx';
import EmbedEvents          from '../../utils/EmbedEventsUtil';
import config               from '../../config';
// import { sendEvent }       from '../../utils/googleAnalytics';
// import { makeSlug }        from '../../utils/urlUtil';

import VideoPage from '../../components/pages/VideoPage.jsx';

const embedEvents = new EmbedEvents({
    embedOrigin: config.embedOrigin
});

class VideoPageContainer extends Component {

  getStart(idxOfVideo) {
    if(idxOfVideo < 2) {
      return 0;
    }
    return idxOfVideo - 1;
  }

  get videoArrayWithBuffer() {
    const ARRAY_LENGTH = 6;
    const { video: { video }, routeParams: { slug } } = this.props;
    if(_.isEmpty(video)) {
      return [];
    }
    const idxOfVideo = _.findIndex(video, v => v.slug.en === slug);
    console.log('idxOfVideo', idxOfVideo)
    const start = this.getStart(idxOfVideo);
    console.log('start', start)
    const end = start + ARRAY_LENGTH + 1;
    console.log('end', end)
    const slicedArr = _.slice(video, start, end);
    return idxOfVideo === 0 ? [undefined].concat(slicedArr) : slicedArr;
  }

  render() {
    const videos = this.videoArrayWithBuffer;
    if(_.isEmpty(videos)) {
      return <div></div>;
    }
    return <VideoPage videos={ videos } />;
  }
}

function mapStateToProps(params) {
  const video = params.video;
  return { video };
}

export default connect(mapStateToProps)(
    connectDataFetchers(VideoPageContainer, [ loadVideo ])
);
