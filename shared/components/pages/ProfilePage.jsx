import React, { PropTypes } from 'react';
import PyryPage from './PyryPage.jsx';
import SamuelPage from './SamuelPage.jsx';

// if (process.env.BROWSER) {
//     require('./FrontPage.scss');
// }

function ProfilePage(props) {
    const { name } = props;

    switch (name) {
        case 'pyry':
            return <PyryPage />;
        case 'samuel':
            return <SamuelPage />;
        default:
            return <div></div>;
    }
}

ProfilePage.propTypes = {
    name: PropTypes.string.isRequired
};

export default ProfilePage;
