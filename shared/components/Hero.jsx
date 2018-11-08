import React, { PropTypes } from 'react';

if (process.env.BROWSER) {
    require('./Hero.scss');
}

function Hero(props) {
    const { type } = props;
    const jsx = {
        front: (
            <div className='mo-hero'>
                <div className='mo-hero__slide'>
                    <div className='mo-hero__content mo-grid'>
                        <img src='static/images/monday_logo-black.svg' className='mo-hero__logo' />
                        <h1
                            className='mo-hero__title mo-hero__title--fontbody mo-textaligncenter mo-h2--fontbody mo-h2'
                        >
                            {'Weeks have never started this well.'}
                        </h1>
                    </div>
                </div>
            </div>
        ),
        other: (
            <div className='mo-hero mo-hero--narrow'>
                <div className='mo-hero__slide'>
                    <div className='mo-hero__content mo-grid'>
                        <a href='/'><img src='/static/images/monday_logo-black.svg' className='mo-hero__logo' /><span className='mo-hero__logo-title'>Back to Home</span></a>
                    </div>
                </div>
            </div>
        )
    };

    return jsx[type];
}

Hero.propTypes = {
    type: PropTypes.string.isRequired
};

Hero.defaultProps = {
    type: 'other'
};

export default Hero;
