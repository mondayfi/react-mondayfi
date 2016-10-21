import React, { Component, PropTypes } from 'react';
import cx    from 'classnames';
import { isEmpty } from 'lodash';
// import { Tab, Tabs } from 'react-mdl/lib/Tabs';
// import { Card }      from 'react-mdl/lib/Card';
// import Spinner       from 'react-mdl/lib/Spinner';
// import Button        from 'react-mdl/lib/Button';

import FrontHero from '../FrontHero.jsx';
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
                    <FrontHero />
                    <WhatWeDo />
                    <CompetenceBullets />
                    <WhoWeAre />
                    <Testimonial />
                    <Footer />
                </div>
            );
        }

        return (
            <div className={frontPageClasses}>
                <FrontHero />
                <WhatWeDo />
                <CompetenceBullets />
                <div className='mo-video-page-wrap'>
                    <div className='mo-colorwrap mo-colorwrap--athensgrey'>
                        <div className='mo-grid'>
                            <VlogLiftup {...videoEpisode} />
                        </div>
                    </div>
                </div>
                <WhoWeAre />
                <Testimonial />
                <Footer />
            </div>
        );
    }
}
