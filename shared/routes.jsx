import React               from 'react';
import { Route, Redirect } from 'react-router';

import App from './containers/App.jsx';

import MainLayout from './containers/layouts/MainLayout.jsx';

import FrontPageContainer       from './containers/pages/FrontPage.jsx';

export default (
    <Route component={App} >
        <Route component={MainLayout}>

            <Route component={FrontPageContainer} path='/' />

            <Redirect from='*' to='/' />
        </Route>
    </Route>
);
