import React               from 'react';
import { Route, Redirect } from 'react-router';

import App from './containers/App.jsx';

import MainLayout from './containers/layouts/MainLayout.jsx';

import FrontPageContainer       	from './containers/pages/FrontPage.jsx';
import VideoPageContainer       	from './containers/pages/VideoPage.jsx';

export default (
    <Route component={App} >
        <Route component={MainLayout}>

            <Route component={FrontPageContainer} path='/' />
            <Route component={VideoPageContainer} path='/vlog/:slug' />
            <Redirect from='/vlog/' to='/' />
        </Route>
    </Route>
);
