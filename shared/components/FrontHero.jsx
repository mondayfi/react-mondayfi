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
						<img src='images/monday_logo.svg' className='mo-hero__logo' />
						<div className='mo-hero__title mo-hero__title--fontbody mo-textaligncenter'>
							{'Weeks have never started this well.'}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
