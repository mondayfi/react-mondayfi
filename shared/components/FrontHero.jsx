import React, { Component } from 'react';

if (process.env.BROWSER) {
	require('./FrontHero.scss');
}

export default class FrontHero extends Component {
	render() {
		return (
			<div className='mo-hero'>
				<div className='mo-hero__slide'>
					<div className='mo-hero__content mo-grid'>
						<img src='static/images/monday_logo.svg' className='mo-hero__logo' />
						<h1 className="mo-hero__title mo-hero__title--fontbody mo-textaligncenter mo-h2--fontbody mo-h2">
							{'Weeks have never started this well.'}
						</h1>
					</div>
				</div>
                  <div className="mo-hero__clouds mo-cloud-anim"></div>
			</div>
		);
	}
}
