import React from 'react';
import cx    from 'classnames';

import { Tab, Tabs } from 'react-mdl/lib/Tabs';
import ReactList     from 'react-list';
import { Card }      from 'react-mdl/lib/Card';
import Spinner       from 'react-mdl/lib/Spinner';
import Button        from 'react-mdl/lib/Button';

import QuizCard    from '../QuizCard.jsx';
import AppBar      from '../AppBar.jsx';
import ShareDialog from '../../containers/ShareDialog.jsx';
import LoginDialog from '../../containers/LoginDialog.jsx';
import Icon        from '../Icon.jsx';

if (process.env.BROWSER) {
    require('./Index.less');
}

const CATEGORIES = ['ALL', 'VACANCY', 'EDUCATION', 'ENTERTAINMENT', 'SPECIAL'];

export default class ActivationsPage extends React.Component {

    render() {
        return <div className="front-page">{ 'content' }</div>
    }
}
