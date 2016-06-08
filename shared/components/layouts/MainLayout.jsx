import React, { Component, PropTypes } from 'react';


if (process.env.BROWSER) {
    require('./MainLayout.sass');
}

export default class MainLayout extends Component {

    // static propTypes = {
    //     showWelcomeScreen      : PropTypes.bool,
    //     showFooter             : PropTypes.bool,
    //     children               : PropTypes.object,
    //     footerLinks            : PropTypes.object,
    //     onWelcomeScreenDismiss : PropTypes.func
    // };

    render() {
        // const { showWelcomeScreen, showFooter, children, onWelcomeScreenDismiss } = this.props;
        const { children } = this.props;

        return (
            <div className='main-layout'>
                <div className='main-layout__content'>
                    {children}
                </div>
            </div>
        );
    }
}
