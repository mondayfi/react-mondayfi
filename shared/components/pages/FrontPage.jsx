import React, { Component } from 'react';
import cx    from 'classnames';
import { isEmpty } from 'lodash'
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
import SomeBlock from '../SomeBlock.jsx';
import Footer from '../Footer.jsx';
import FooterLove from '../FooterLove.jsx';

if (process.env.BROWSER) {
    require('./FrontPage.scss');
}

export default class FrontPage extends Component {

    render() {
      const { videoEpisode } = this.props;
      const frontPageClasses = cx({
        'mo-front-page': true
      });

        if(isEmpty(videoEpisode)) {
          return (
            <div className={frontPageClasses}>
              <FrontHero />
              <WhatWeDo />
              <CompetenceBullets />
              <WhoWeAre />
              <Testimonial />
              <SomeBlock />
              <Footer />
              <FooterLove />
            </div>
          );
        }
        
        return (
          <div className={frontPageClasses}>
            <FrontHero />
            <WhatWeDo />
            <CompetenceBullets />
            <VlogLiftup {...videoEpisode} />
            <WhoWeAre />
            <Testimonial />
            <SomeBlock />
            <Footer />
            <FooterLove />
          </div>
        );
    }   
}
