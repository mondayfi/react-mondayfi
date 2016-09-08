import React, { Component } from 'react';
import { Link } from 'react-router';

export default class FooterLove extends Component {
    render() {
        return (
            <div className="mo-colorwrap mo-colorwrap--white mo-colorwrap--smallpadding">
              <div className="mo-grid">
                <p className="mo-textaligncenter">Made with <i className="mo-icon mo-icon--heart mo_heartred"></i> in Helsinki.</p>
              </div>
            </div>
        );
    }
}
