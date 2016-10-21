import React, { Component, PropTypes } from 'react';
import { connect }                     from 'react-redux';
import _ from 'lodash';

import { loadVideo }        from '../../actions/videos';
import connectDataFetchers  from '../../lib/connectDataFetchers.jsx';
import VideoPage from '../../components/pages/VideoPage.jsx';

class VideoPageContainer extends Component {

    static propTypes = {
        video: PropTypes.object.isRequired,
        routeParams: PropTypes.object.isRequired
    }

    constructor(props) {
        super();
        this.state = {
            currentIndex: 0
        };
        this.updateIndexOnPropChange(props);
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

    updateIndexOnPropChange(props) {
        const { video: { video }, routeParams: { slug } } = this.props || props;

        if (_.isEmpty(video)) {
            return;
        }

        const foundIndex = _.findIndex(video, v => v.slug.en === slug);

        if (props) {
            this.state = {
                currentIndex: foundIndex
            };

            return;
        }

        return this.setState({
            currentIndex: foundIndex
        });
    }

    get videoThumbs() {
        const THUMBNAILS_VISIBLE = 5;
        const thumbnailsOnSides = (THUMBNAILS_VISIBLE - 1) / 2;
        const { currentIndex } = this.state;
        const { video: { video } } = this.props;

        const maxIndex = _.size(video);
        const indexFromTheEnd = maxIndex - currentIndex;
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
