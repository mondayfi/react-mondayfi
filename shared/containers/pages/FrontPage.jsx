import React, { Component, PropTypes } from 'react';
import { connect }                     from 'react-redux';
import { Link } from 'react-router';
import _ from 'lodash';

import { getLatest } from '../../actions/videos';
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
        const { getLatestVideo } = this.props;
        console.log(this.props);
        return <div><Link to={`/vlog/our-biggest-mistakes`}>{ 'jee' }</Link></div>;
        // return <FrontPage videoEpisode={ getLatestVideo.episode } />;
    }
}

function mapStateToProps({ getLatestVideo }) {
    return {
        getLatestVideo
    };
}

export default connect(mapStateToProps)(
    connectDataFetchers(IndexPageContainer, [ getLatest ])
);
