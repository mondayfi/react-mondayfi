const DEFAULT_LOCALE = 'en';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import fetch from 'isomorphic-fetch';
import cookie from 'cookie';

import configureStore from '../shared/store/configureStore';
import routes from '../shared/routes.jsx';
import i18n from '../shared/i18n';

const initialState = window.__INITIAL_STATE__ || {};
const store = configureStore(initialState);
const locale = cookie.parse(document.cookie).locale || DEFAULT_LOCALE;

function loadLocale(localeToLoad) {
    if (localeToLoad === 'en') {
        // No need to load as UI already in English
        return Promise.resolve({});
    }


    // "": { "domain": "messages", "lang": "" }
    return fetch(`/static/lang/${localeToLoad}.json`).then(res => {
        if (res.status >= 400) {
            throw new Error('Bad response from server');
        }

        return res.json();
    });
}

function scrollTop() {
    const {
      action
    } = this.state.location;

    if (action === 'PUSH') {
        window.scrollTo(0, 0);
    }
}

loadLocale(locale).then(localeData => {
    const i18nTools = new i18n.Tools({ localeData, locale });

    ReactDOM.render(
        <Provider store={store}>
            <i18n.Provider i18n={i18nTools}>
                <Router onUpdate={scrollTop} children={routes} history={browserHistory} />
            </i18n.Provider>
        </Provider>,

        document.getElementById('react-view')
    );
}).catch(error => {
    console.error(error.stack);
});
