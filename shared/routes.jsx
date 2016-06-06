import React               from 'react';
import { Route, Redirect } from 'react-router';

import App from './containers/App.jsx';

import MainLayout from './containers/layouts/MainLayout.jsx';

import IndexPageContainer       from './containers/pages/IndexPage.jsx';

export default (
    <Route component={App} >
        <Route component={MainLayout} path='/'>
            <Redirect from='/' to='/activations' />

            <Route component={ IndexPageContainer } path='/activations' />

            <Redirect from='*' to='/' />
        </Route>
    </Route>
);
