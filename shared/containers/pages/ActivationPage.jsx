import React, { Component, PropTypes } from 'react';
import { connect }                     from 'react-redux';

import { loadActivation, loadSimilarActivations } from '../../actions/activations';
import connectDataFetchers                        from '../../lib/connectDataFetchers.jsx';
// import EmbedEvents                                from '../../utils/EmbedEventsUtil';
import config                                     from '../../config';
import { sendEvent }                              from '../../utils/googleAnalytics';
import { makeSlug }                               from '../../utils/urlUtil';

import ActivationPage from '../../components/pages/ActivationPage.jsx';

// const embedEvents = new EmbedEvents({
//     embedOrigin: config.embedOrigin
// });

class ActivationPageContainer extends Component {

    render() {
        // const { activation, authorActivations, similarActivations, isLoading } = this.props;
        // const { sharingLink, isLoggingIn } = this.state;
        // const { embed, assigneeId } = this.props.location.query;

        return (
            <ActivationPage />
        );
    }
}

function mapStateToProps({ currentActivation: { activation, authorActivations,
 similarActivations, isLoading }, currentAssessmentSystem : { assessmentSystem } }) {
    return {
        activation,
        authorActivations,
        similarActivations,
        isLoading,
        customAssessmentSystem: assessmentSystem
    };
}

export default connect(mapStateToProps)(
    connectDataFetchers(ActivationPageContainer, [loadActivation, loadSimilarActivations])
);
