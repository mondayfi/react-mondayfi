import React from 'react';
import cx    from 'classnames';

import { Card, CardTitle } from 'react-mdl/lib/Card';
import Grid, { Cell }      from 'react-mdl/lib/Grid';
import Button              from 'react-mdl/lib/Button';
import IconButton          from 'react-mdl/lib/IconButton';
import Spinner             from 'react-mdl/lib/Spinner';

import QuizTile             from '../QuizTile.jsx';
import Icon                 from '../Icon.jsx';
import ShareDialog          from '../../containers/ShareDialog.jsx';
import LoginDialog          from '../../containers/LoginDialog.jsx';
import AppBarWithBackground from '../AppBarWithBackground.jsx';
import ExpandableText       from '../ExpandableText.jsx';

import { sprintf } from '../../utils';

if (process.env.BROWSER) {
    require('./ActivationPage.less');
}

export default class ActivationPage extends React.Component {

    render() {
        return <div className="front-page"></div>;
    }
}
