import React, { Component } from 'react';
import cx    from 'classnames';
import VlogLiftup from '../VlogLiftup.jsx';


if (process.env.BROWSER) {
    require('./FrontPage.scss');
}

export default class FrontPage extends Component {

    render() {
        const {video} = this.props;
    	const frontPageClasses = cx({
    		'mo-front-page': true
    	});
        
        return (<div className={frontPageClasses}>
            <VlogLiftup {...video} />
        </div>);
    }
}
