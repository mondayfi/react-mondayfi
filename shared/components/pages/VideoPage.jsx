import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import cx    from 'classnames';
import VlogLiftup from '../VlogLiftup.jsx';
import ThumbnailLink from '../ThumbnailLink.jsx';


if (process.env.BROWSER) {
    require('./VideoPage.scss');
}

export default class FrontPage extends Component {

    static propTypes = {
        currentSlug: PropTypes.string.isRequired,
        videos: PropTypes.array
    }

    nl2br(string) {
        const arrayOfText = string.split('\n');

        return _(arrayOfText)
          .compact()
          .map((d, i) => <p key={i}>{d}</p>)
          .value();
    }

    directionLink(video, label) {
        if (_.isUndefined(video)) {
            return;
        }

        return <Link to={`/vlog/${video.slug.en}`}>{label}</Link>;
    }

    render() {
        const { currentSlug, videos } = this.props;
        const frontPageClasses = cx({
            'mo-front-page': true
        });

        if (_.isEmpty(videos)) {
            return <div></div>;
        }
        const currentIdx = _.findIndex(videos, v => v.slug.en === currentSlug);
        const prevVideoIdx = currentIdx - 1;
        const nextVideoIdx = currentIdx + 1;
        const currentVideo = videos[currentIdx];
        const prevVideo = videos[prevVideoIdx];
        const nextVideo = videos[nextVideoIdx];

        return (
            <div className={frontPageClasses}>
            <div className='mo-hero mo-hero--narrow'>
            <div className='mo-hero__slide'>
              <div className='mo-hero__content mo-grid'>
                <a href='/'><img src='/static/images/monday_logo.svg' className='mo-hero__logo' /></a>
              </div>
            </div>
          </div>
          { this.directionLink(prevVideo, <i className="mo-icon mo-icon--arrow-left"></i>) }
          <VlogLiftup {...currentVideo} />
          { this.directionLink(nextVideo, <i className="mo-icon mo-icon--arrow-right"></i>) }
          <div className="mo-colorwrap mo-colorwrap--purple">
          <div className="mo-grid">
          <h3>Previous episodes</h3>
          <div className="mo-thumbnail-wrapper">
          
            { 
              videos.map((v, i) => {
                return <ThumbnailLink isCurrent={ currentIdx === i  } key={i} thumb={v.thumb} slug={v.slug.en} />;
              })
            }
            </div>
            </div>
          </div>
            <div className="mo-colorwrap mo-colorwrap--athensgrey">
            <div className="mo-grid">
                <h3>{currentVideo.title.en }</h3>
              { this.nl2br(currentVideo.description.en) }
              </div>
          </div>
          <div className='mo-colorwrap mo-colorwrap--white mo-colorwrap--white--border mo-colorwrap--nopadding '>
        <div className='mo-grid'>
          <div className='mo-footer'>
            <div className='mo-footer__some'>
              <ul className='mo-footer__some__ul'>
                <li className='mo-footer__some__li'><a href='https://www.facebook.com/mondaydigital' className='mo-footer__some__item mo-footer__some__item--border'  target='_blank'><i className='mo-icon mo-icon--facebook'></i><span className='mo-footer__some__text'>Facebook</span></a></li>
                <li className='mo-footer__some__li'><a href='https://twitter.com/mondayfi' className='mo-footer__some__item mo-footer__some__item--border' target='_blank'><i className='mo-icon mo-icon--twitter'></i><span className='mo-footer__some__text'>LinkedIn</span></a></li>
                <li className='mo-footer__some__li'><a href='https://www.linkedin.com/company/monday-digital-oy' className='mo-footer__some__item' target='_blank'><i className='mo-icon mo-icon--linkedin'></i><span className='mo-footer__some__text'>Twitter</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='mo-colorwrap mo-colorwrap--white mo-colorwrap--smallpadding'>
        <div className='mo-grid'>
        <p className='mo-textaligncenter'>Made with <i className='mo-icon mo-icon--heart mo_heartred'></i> in Helsinki.</p>
        </div>
      </div>
        </div>
        );
    }
}
