import _            from 'lodash';
import express      from 'express';
import cookieParser from 'cookie-parser';
import querystring  from 'querystring';

import React                     from 'react';
import ReactDOM                  from 'react-dom/server';
import { Provider }              from 'react-redux';
import { Router, RouterContext, match } from 'react-router';
import escapeHTML                from 'lodash/string/escape';

import { fetchComponentsData,
         getMetaDataFromState,
         makeRedirectUrl,
         detectLocale } from './utils';

import routes         from '../shared/routes.jsx';
import configureStore from '../shared/store/configureStore';
import i18n           from '../shared/i18n';
import { makeSlug }   from '../shared/utils/urlUtil';

import clientConfig from '../etc/client-config.json';

// Initializa localization
import ruLocaleData from '../public/static/lang/ru.json';
import ukLocaleData from '../public/static/lang/uk.json';
import enLocaleData from '../public/static/lang/en.json';
import trLocaleData from '../public/static/lang/tr.json';

const i18nToolsRegistry = {
    ru   : new i18n.Tools({ localeData: ruLocaleData, locale: 'ru' }),
    en   : new i18n.Tools({ localeData: enLocaleData, locale: 'en' }),
    uk   : new i18n.Tools({ localeData: ukLocaleData, locale: 'uk' }),
    tr   : new i18n.Tools({ localeData: trLocaleData, locale: 'tr' })
};

const app = express();
app.use('/static', express.static('public/static'));

app.use(cookieParser());


app.get('/newsletter', (req, res) => {
    res.redirect('http://newsletter.monday.fi/');
});

app.use((req, res) => {
    // // Process old links like /en/activations
    // if (req.url.match(/\/[a-z]{2}\//i)) {
    //     const noLangUrl = req.url.replace(/^\/[a-z]{2}/i, '');

    //     return res.redirect(302, noLangUrl);
    // }

    // // If user is authenticated redirect him to the wall embedded into the main app
    // if (req.cookies.authenticated && !req.url.match('embed')) {
    //     const redirectUrl = makeRedirectUrl({ originalUrl: req.url });

    //     return res.redirect(302, redirectUrl);
    // }

    // const locale = detectLocale(req);
    const store = configureStore();

    // const i18nTools = i18nToolsRegistry[locale];

    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        // if (req.url === '/') {
        //     return res.redirect(302, '/activations');
        // }
        if (redirectLocation) {
            return res.redirect(301, redirectLocation.pathname + redirectLocation.search);
        } else if (error) {
            res.status(400).send(error.message);
        } else if (!renderProps) {
            res.status(404).send('Not found');
        } else {
            fetchComponentsData({
                dispatch   : store.dispatch,
                components : renderProps.components,
                params     : renderProps.params,
                query      : renderProps.location.query
            })
            .then(() => {
                const initialState = store.getState();

                const metaData = getMetaDataFromState({
                    params : renderProps.params,
                    query  : renderProps.location.query,
                    route  : renderProps.routes[renderProps.routes.length - 1].path,
                    state  : initialState
                });
                if (metaData.type === 'ACTIVATION') {
                    const activationId = renderProps.params.id;
                    const expectedPath =  `/activations/${activationId}/${makeSlug(metaData.title)}`;

                    if (!req.path.endsWith(expectedPath)) {
                        // TODO optimize. There is no need to fetch similar tests and tests from the same author
                        const expectedUrl = Object.keys(req.query).length
                            ? `${expectedPath}?${querystring.stringify(req.query)}`
                            : expectedPath;

                        return {
                            isRedirect : true,
                            redirectUrl: expectedUrl
                        };
                    }
                }

                const componentHTML = ReactDOM.renderToString(
                    <Provider store={store}>
                        <RouterContext {...renderProps} />
                    </Provider>
                );

                const html = renderHTML({
                    componentHTML,
                    initialState,
                    metaData,
                    config : clientConfig,
                    url: req.url
                });
                return { html };
            })
            .then(({ isRedirect, redirectUrl, html }) => {
                // res.cookie('locale', locale, { maxAge: 900000 });    

                if (isRedirect) {
                    res.redirect(301, redirectUrl);
                } else {
                    res.end(html);
                }
            })
            .catch(err => {
                console.log(err.stack);
                res.end(err.message);
            });
        }
    });
});


function renderHTML({ componentHTML, initialState, metaData, config, url }) {
    const imageSize = metaData.imageSize || { width: 158, width: 158 };
    const noPrevValues = _(metaData.previous).values().isEmpty();
    const previousLink = noPrevValues ? '' : `<link rel="prev" title="${metaData.previous.title}" href="${config.staticUrl}/${metaData.previous.slug}" />`;
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="https://use.typekit.net/wgu0qkj.css">
            <link rel="shortcut icon" href="/static/favicon.ico"/>
            <link rel="icon" type="image/png" href="/static/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="/static/favicon-16x16.png" sizes="16x16" />
            <title>${escapeHTML(metaData.title)}</title>

            <meta name="description" content="${escapeHTML(metaData.description)}">
            <meta property="og:title" content="${escapeHTML(metaData.title)}" />
            <meta property="og:site_name" content="${escapeHTML(metaData.siteName)}"/>
            <meta property="og:image" content="${escapeHTML(metaData.image)}" />
            <meta property="og:image:width" content="${imageSize.width}" />
            <meta property="og:image:height" content="${imageSize.height}" />
            <meta property="og:description" content="${escapeHTML(metaData.description)}" />
            <meta property="og:locale" content="en_US" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@mondayfi" />
            <meta name="twitter:title" content="${escapeHTML(metaData.title)}" />
            <meta name="twitter:description" content="${escapeHTML(metaData.description)}" />
            <meta name="twitter:image" content="${escapeHTML(metaData.image)}" />
            <meta property="fb:app_id" content="${escapeHTML(config.facebookAppId)}" />
            <link rel="canonical" href="${config.staticUrl}${url}">
            ${previousLink}
            <link rel="stylesheet" href="${config.staticUrl}/static/build/main.css">
        </head>
        <body>
        <div id="react-view">${componentHTML}</div>
        <script type="application/javascript">
            window.__CONFIG__ = ${JSON.stringify(config)};
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
<!-- Page hiding snippet (recommended) -->
<style>.async-hide { opacity: 0 !important} </style>
<script>
(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;
h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);
})(window,document.documentElement,'async-hide','dataLayer',4000,{'GTM-WFPHCDF':true});
</script>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WFPHCDF');</script>

<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WFPHCDF"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <script>
            (function(f,b){
                var c;
                f.hj=f.hj||function(){(f.hj.q=f.hj.q||[]).push(arguments)};
                f._hjSettings={hjid:32935, hjsv:4};
                c=b.createElement("script");c.async=1;
                c.src="//static.hotjar.com/c/hotjar-"+f._hjSettings.hjid+".js?sv="+f._hjSettings.hjsv;
                b.getElementsByTagName("head")[0].appendChild(c);
            })(window,document);
        </script>
        
        <script type="application/javascript" src="${config.staticUrl}/static/build/main.js"></script>
        </body>
        </html>
    `;
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening one: ${PORT}`);
});
