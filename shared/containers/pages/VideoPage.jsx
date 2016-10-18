import React, { Component, PropTypes } from 'react';
import { connect }                     from 'react-redux';
import _ from 'lodash';

import { loadVideo }        from '../../actions/videos';
import connectDataFetchers  from '../../lib/connectDataFetchers.jsx';
// import EmbedEvents          from '../../utils/EmbedEventsUtil';
// import config               from '../../config';
// import { sendEvent }       from '../../utils/googleAnalytics';
// import { makeSlug }        from '../../utils/urlUtil';

import VideoPage from '../../components/pages/VideoPage.jsx';

// const embedEvents = new EmbedEvents({
//     embedOrigin: config.embedOrigin
// });

class VideoPageContainer extends Component {

    static propTypes = {
        video: PropTypes.object.isRequired,
        routeParams: PropTypes.object.isRequired
    }

    constructor() {
        super();
        this.state = {
            currentIndex: null
        };
    }

    componentDidMount() {
        this.updateIndexOnPropChange();
    }

    componentDidUpdate(nextProps) {
        if (_.isEqual(this.props, nextProps)) {
            return;
        }
        this.updateIndexOnPropChange();
    }

    updateIndexOnPropChange() {
        const { video: { video }, routeParams: { slug } } = this.props;

        if (_.isEmpty(video)) {
            return;
        }
        const foundIndex = _.findIndex(video, v => v.slug.en === slug);

        this.setState({
            currentIndex: foundIndex
        });
    }

    get videoThumbs() {
        const THUMBNAILS_VISIBLE = 5;
        const thumbnailsOnSides = (THUMBNAILS_VISIBLE - 1) / 2;
        const { currentIndex } = this.state;
        const { video: { video } } = this.props;

        if (_.isNull(currentIndex)) {
            return [];
        }
        const maxIndex = _.size(video);
        const indexFromTheEnd = maxIndex - this.state.currentIndex;

        let start;
        let end;

        if (this.state.currentIndex <= thumbnailsOnSides) {
            start = 0;
            end = THUMBNAILS_VISIBLE;
        } else if (indexFromTheEnd <= thumbnailsOnSides) {
            start = maxIndex - THUMBNAILS_VISIBLE;
            end = maxIndex;
        } else {
            start = this.state.currentIndex - thumbnailsOnSides;
            end = start + THUMBNAILS_VISIBLE;
        }

        return _.slice(video, start, end);
    }

    render() {
        const { routeParams: { slug } } = this.props;
        const { currentIndex } = this.state;

        if (_.isNull(currentIndex)) {
            return <div></div>;
        }

        const videos = this.videoThumbs;

        return <VideoPage currentSlug={slug} videos={videos} />;
    }
}

function mapStateToProps(params) {
    const video = params.video;

    return { video };
}

export default connect(mapStateToProps)(
    connectDataFetchers(VideoPageContainer, [ loadVideo ])
);
