import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import cx    from 'classnames';
import VlogLiftup from '../VlogLiftup.jsx';
import Hero from '../Hero.jsx';
import Footer from '../Footer.jsx';
import ThumbnailLink from '../ThumbnailLink.jsx';

if (process.env.BROWSER) {
    require('./VideoPage.scss');
}

export default class FrontPage extends Component {

    static propTypes = {
        currentSlug: PropTypes.string.isRequired,
        videos: PropTypes.array
    }

    parsePlainText(string) {
        const arrayOfText = string.split('\n');
        const htmlTagsRegExp = /<[^>]*>/g;
        const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

        return _(arrayOfText)
            .compact()
            .map((txt, i) => {
                const allTagsRemoved = txt.replace(htmlTagsRegExp, '');
                const txtWithParsedLinks = allTagsRemoved.replace(urlRegex, url => `<a target="__blank" class="mo_linkicon__link" href="${url}">${url}</a>`);

                return <p key={i} dangerouslySetInnerHTML={{ __html: txtWithParsedLinks }}></p>;
            })
            .value();
    }

    directionLink(video, label, additionalClass) {
        if (_.isUndefined(video)) {
            return;
        }

        return <Link className={additionalClass} to={`/vlog/${video.slug.en}`}>{label}</Link>;
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
                <Hero />
                <div className='mo-video-page-wrap'>
                    <div className='mo-colorwrap mo-colorwrap--athensgrey'>
                        <div className='mo-grid'>
                            {this.directionLink(prevVideo, <i className='mo-icon mo-icon--arrow-right'></i>, 'mo-video-thumb mo-video-thumb--right')}
                            <VlogLiftup {...currentVideo} />
                            {this.directionLink(nextVideo, <i className='mo-icon mo-icon--arrow-left'></i>, 'mo-video-thumb mo-video-thumb--left')}
                        </div>
                    </div>
                </div>
                <div className='mo-colorwrap mo-colorwrap--purple'>
                    <div className='mo-grid'>
                        <h3>Previous episodes</h3>
                        <div className='mo-thumbnail-wrapper'>
                            {videos.map((v, i) =>
                                <ThumbnailLink
                                    isCurrent={currentIdx === i}
                                    key={i}
                                    thumb={v.thumb}
                                    slug={v.slug.en}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className='mo-colorwrap mo-colorwrap--athensgrey'>
                    <div className='mo-grid'>
                        <h3>{currentVideo.title.en}</h3>
                        {this.parsePlainText(currentVideo.description.en)}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
