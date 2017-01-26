import Promise     from 'bluebird';
import strformat   from 'strformat';
import _           from 'lodash';

import clientConfig              from '../etc/client-config.json';
import { getSupportedLocales }   from '../shared/utils';

export function fetchComponentsData({ dispatch, components, params, query, locale }) {
    const promises = components.map(current => {
        const component = current.WrappedComponent ? current.WrappedComponent : current;

        return component.fetchData
            ? component.fetchData({ dispatch, params, query, locale })
            : null;
    });

    return Promise.all(promises);
}

export function getMetaDataFromState({ route, state, params = {}, query = {}, lang }) {
    if(route === '/vlog/:slug') {

        const videos = _.chain(state)
            .get('video.video', []);

        const currentIdx = videos.findIndex(d => _.get(d, 'slug.en') === params.slug).value()
        const prevIdx = currentIdx + 1;
        const current = videos.get(`[${currentIdx}]`, {});
        const previous = videos.get(`[${prevIdx}]`, {})
        const description = current
            .get('description.en')
            .split('\n')
            .compact()
            .reject(d => (
                _.contains(d, 'https://goo.gl/tZg3Y6') || _.contains(d, 'https://goo.gl/GzYfBP')
            ))
            .head();

        return {
            type        : 'VIDEO',
            title       : current.get('title.en', 'Weeks have never started this well') +' | Monday Digital',
            siteName    : 'Monday.fi',
            image       : current.get('thumb', 'http://monday.fi/images/monday_logo.svg'),
            description : description.value(),
            slug        : current.get('slug.en', ''),
            imageSize   : { width: 1687 , height: 949 },
            previous    : {
                title: previous.get('title.en', 'Weeks have never started this well') +' | Monday Digital',
                slug: previous.get('slug.en', '')
            }
        };
        return  {};
    }

    return {
        type        : 'MAIN',
        title       : 'Weeks have never started this well',
        siteName    : 'Monday.fi',
        image       : 'http://monday.fi/images/monday_logo.svg',
        description : `Monday makes razor sharp online services that match the demand of today's users.`
    };
}

export function makeRedirectUrl({ originalUrl }) {
    const UIWallPath = `${clientConfig.embedOrigin}/quizwall`;

    return `${UIWallPath}${originalUrl}`;
}

export function detectLocale(req) {
    // Take locale passed by user
    const passedLocale = (req.query.locale || req.cookies.locale || '').toLowerCase();

    if (getSupportedLocales().indexOf(passedLocale) >= 0) {
        return passedLocale;
    }

    // Detect locale by ip
    const ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.connection.remoteAddress;
    const geo = geoip.lookup(ip);
    const country = (geo && geo.country);

    return {
        UA: 'uk',
        RU: 'ru',
        TR: 'tr'
    }[country] || 'en';
}

function _getGreeting(assessmentSystem, score) {
    for (let i = assessmentSystem.length - 1; i >= 0; i--) {
        if (score >= assessmentSystem[i].grade) {
            return {
                phrase: assessmentSystem[i].phrase,
                description: assessmentSystem[i].description || ''
            };
        }
    }
}
