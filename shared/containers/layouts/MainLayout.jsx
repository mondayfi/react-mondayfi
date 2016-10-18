/* eslint react/no-did-mount-set-state: 0 */

import React, { Component, PropTypes } from 'react';

import MainLayout from '../../components/layouts/MainLayout.jsx';

// import { sendEvent }   from '../../utils/googleAnalytics';

export default class MainLayoutContainer extends Component {
    static propTypes = {
        children  : PropTypes.array
    };

    render() {
        const { children } = this.props;

        // const isEmbedded = location.query.embed;

        return (
            <MainLayout> {children} </MainLayout>
        );
    }
}
