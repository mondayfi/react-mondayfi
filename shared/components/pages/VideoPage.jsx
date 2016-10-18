import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import cx    from 'classnames';
import VlogLiftup from '../VlogLiftup.jsx';
import ThumbnailLink from '../ThumbnailLink.jsx';


if (process.env.BROWSER) {
    require('./FrontPage.scss');
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
                {this.directionLink(prevVideo, '<<<')}
                <VlogLiftup {...currentVideo} />
                {this.directionLink(nextVideo, '>>>')}
                <div>
                  {
                    videos.map((v, i) => {
                        return (
                            <ThumbnailLink
                                isCurrent={currentIdx === i}
                                key={i}
                                thumb={v.thumb}
                                slug={v.slug.en}
                            />
                        );
                    })
                  }
                </div>
              {this.nl2br(currentVideo.description.en)}
            </div>
        );
    }
}
