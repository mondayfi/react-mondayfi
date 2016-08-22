import React, { Component } from 'react';
import cx    from 'classnames';
import VlogLiftup from '../VlogLiftup.jsx';
import { chain, isEmpty } from 'lodash';


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

    render() {
        const {video} = this.props;
    	const frontPageClasses = cx({
    		'mo-front-page': true
    	});
        console.log(video);
        if(isEmpty(video)) {
            return <div></div>;
        }
        const description = video.description ? video.description.en :'';

            
        
        return (<div className={frontPageClasses}>
            <VlogLiftup {...video} />
            { this.nl2br(description) }
        </div>);
    }
}
