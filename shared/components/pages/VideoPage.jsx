import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import cx    from 'classnames';
import VlogLiftup from '../VlogLiftup.jsx';
import ThumbnailLink from '../ThumbnailLink.jsx';
import { chain } from 'lodash';


if (process.env.BROWSER) {
    require('./FrontPage.scss');
}

export default class FrontPage extends Component {

    nl2br(string) {
      const arrayOfText = string.split('\n');
      return chain(arrayOfText)
        .compact()
        .map((d, i) => <p key={i}>{d}</p>)
        .value(); 
    }

    prevLink(prevVideo) {
      if(_.isUndefined(prevVideo)) {
        return;
      }
      return <Link to={`/vlog/${prevVideo.slug.en}`}>Prev</Link>
    }

    nextLink(nextVideo) {
      if(_.isUndefined(nextVideo)) {
        return;
      }
      return <Link to={`/vlog/${nextVideo.slug.en}`}>Next</Link>
    }

    render() {
      const { video, videos } = this.props;
      const frontPageClasses = cx({
        'mo-front-page': true
      });

      if(_.isEmpty(videos)) {
          return <div></div>
      }
      const prevVideo = videos[0];
      const currentVideo = videos[1];
      const olderVideos = _.drop(videos, 2);
      const nextVideo = _.head(olderVideos);
      console.log(prevVideo);
      console.log(currentVideo);
      console.log(nextVideo);
      return (
        <div className={frontPageClasses}>
          { this.prevLink(prevVideo) }
          <VlogLiftup {...currentVideo} />
          { this.nextLink(nextVideo) }
          <div>
            { olderVideos.map(v => <ThumbnailLink thumb={v.thumb} slug={v.slug.en} />) }
          </div>
          { this.nl2br(currentVideo.description.en) }
        </div>
        );
    }
}
