import React, { Component, PropTypes } from 'react';
import cx    from 'classnames';
import { isEmpty } from 'lodash';
// import { Tab, Tabs } from 'react-mdl/lib/Tabs';
// import { Card }      from 'react-mdl/lib/Card';
// import Spinner       from 'react-mdl/lib/Spinner';
// import Button        from 'react-mdl/lib/Button';

import Hero from '../Hero.jsx';
import WhatWeDo from '../WhatWeDo.jsx';
import CompetenceBullets from '../CompetenceBullets.jsx';
import WhoWeAre from '../WhoWeAre.jsx';
import VlogLiftup from '../VlogLiftup.jsx';
import Testimonial from '../Testimonial.jsx';
import Footer from '../Footer.jsx';

if (process.env.BROWSER) {
    require('./FrontPage.scss');
}

export default class FrontPage extends Component {
    static propTypes = {
        videoEpisode: PropTypes.object.isRequired
    }

    render() {
        const { videoEpisode } = this.props;
        const frontPageClasses = cx({
            'mo-front-page': true
        });

        if (isEmpty(videoEpisode)) {
            return (
                <div className={frontPageClasses}>
                    <Hero type={'front'} />
                    <WhatWeDo />
                    <WhoWeAre />
                    <Testimonial />
                    <Footer />
                </div>
            );
        }

        return (
            <div className={frontPageClasses}>
                <Hero type={'front'} />
                <WhatWeDo />
                <VlogLiftup {...videoEpisode} type={'front'} />
                <WhoWeAre />
                <Testimonial />
                <Footer />
            </div>
        );
    }
}
