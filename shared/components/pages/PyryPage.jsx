import React from 'react';

const PyryPage = props => {
  return (
    <div>
      <div className='mo-hero mo-hero--narrow'>
        <div className='mo-hero__slide'>
          <div className='mo-hero__content mo-grid'>
            <a href='/'><img src='/static/images/monday_logo.svg' className='mo-hero__logo'></img></a>
          </div>
        </div>
      </div>
      <div className='mo-colorwrap mo-colorwrap--white mo-colorwrap--white--border'>
        <div className='mo-grid'>
          <div className='mo-stand-alone'>
            <div className='mo-authorimage mo-authorimage--stand-alone'>
              <img className='mo-authorimage__image' src='/static/images/pyry.jpg' alt='Pyry Kovanen'></img>
            </div>
            <a href='tel:+358408098364' className='mo_linkicon  mo_linkicon--black'><i className='mo-icon mo-icon--phone'></i><span className='mo_linkicon__link'>040 809 83 64</span></a><br />
            <a href='mailto:pyry@monday.fi' className='mo_linkicon  mo_linkicon--black'><i className='mo-icon mo-icon--envelope'></i><span className='mo_linkicon__link'>pyry@monday.fi</span></a><br />
            <a href='https://fi.linkedin.com/in/pyrykovanen' className='mo_linkicon  mo_linkicon--black'><i className='mo-icon mo-icon--linkedin'></i><span className='mo_linkicon__link'>LinkedIn</span></a>
          </div>
          <h2 className='mo-stand-alone__title'>Pyry Kovanen</h2>
          <h3 className='mo-stand-alone__sub-title'>Full Stack Developer</h3>
          <p>I'm social and conscientious, I'm not afraid of new challenges and I'm eager to learn new things. I'm good team worker, but I am also efficient while working alone. I tend to write as effective and clean code as possible, without forgetting the end user’s experience. I’ve worked with companies ranging from startups to biggest customers in Finland.</p>
          <p>Some frameworks I have recently used:<br />
              — React<br />
              — node.js<br />
              — Ampersand<br />
              — etc.
          </p>
        </div>
      </div>
      <div className='mo-colorwrap mo-colorwrap--white mo-colorwrap--white--border mo-colorwrap--nopadding '>
        <div className='mo-grid'>
          <div className='mo-footer'>
            <div className='mo-footer__some'>
              <ul className='mo-footer__some__ul'>
                <li className='mo-footer__some__li'><a href='https://www.facebook.com/mondaydigital' className='mo-footer__some__item mo-footer__some__item--border'  target='_blank'><i className='mo-icon mo-icon--facebook'></i><span className='mo-footer__some__text'>Facebook</span></a></li>
                <li className='mo-footer__some__li'><a href='https://twitter.com/mondayfi' className='mo-footer__some__item mo-footer__some__item--border' target='_blank'><i className='mo-icon mo-icon--twitter'></i><span className='mo-footer__some__text'>LinkedIn</span></a></li>
                <li className='mo-footer__some__li'><a href='https://www.linkedin.com/company/monday-digital-oy' className='mo-footer__some__item' target='_blank'><i className='mo-icon mo-icon--linkedin'></i><span className='mo-footer__some__text'>Twitter</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='mo-colorwrap mo-colorwrap--white mo-colorwrap--smallpadding'>
        <div className='mo-grid'>
        <p className='mo-textaligncenter'>Made with <i className='mo-icon mo-icon--heart mo_heartred'></i> in Helsinki.</p>
        </div>
      </div>
    </div>
  );
};

export default PyryPage;
