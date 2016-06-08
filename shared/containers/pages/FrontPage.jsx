import React, { Component, PropTypes } from 'react';
import { connect }                     from 'react-redux';

import { loadActivations } from '../../actions/activations';
import connectDataFetchers from '../../lib/connectDataFetchers.jsx';
import EmbedEvents         from '../../utils/EmbedEventsUtil';
import config              from '../../config';
import { sendEvent }       from '../../utils/googleAnalytics';
import { makeSlug }        from '../../utils/urlUtil';

import FrontPage from '../../components/pages/FrontPage.jsx';

const embedEvents = new EmbedEvents({
    embedOrigin: config.embedOrigin
});

class IndexPageContainer extends Component {

    render() {
        return <FrontPage />;
    }
}

function mapStateToProps({ activations }) {
    const { entitiesByCategory, sortType, search, category, isLoading, totalActivationsAmount } = activations;

    return {
        totalActivationsAmount,
        isLoading,
        search,
        category,
        sortType: sortType || 'new',
        activations: entitiesByCategory[category] || []
    };
}

export default connect(mapStateToProps)(
    connectDataFetchers(IndexPageContainer, [ loadActivations ])
);
