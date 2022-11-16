import React from 'react';
import "./PlaceToStay.css"

const PlaceToStay = () => {
  return (
    <div className='placetostay'>
      <div className="places">
        <span className='restaurant'>Restaurant</span>
        <span className='cottage'>Cottage</span>
        <span className='castle'>Castle</span>
        <span className='fantasy'>Fantasy city</span>
        <span className='beach'>beach</span>
        <span className='carbins'>Carbins</span>
        <span className='offgrid'>Off-grid</span>
        <span className='farm'>Farm</span>
        <span><img className='location' src="location.png"></img></span>
      </div>
      <div className='homeall'>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3"><img className="home9 pic"src="home9.png"></img></div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3"><img className="home10 pic"src="home10.png"></img></div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3"><img className="home11 pic"src="home11.png"></img></div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3"><img className="home12 pic"src="home12.png"></img></div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3"><img className="home13 pic"src="home13.png"></img></div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3"><img className="home14 pic"src="home14.png"></img></div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3"><img className="home15 pic"src="home15.png"></img></div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3"><img className="home16 pic"src="home16.png"></img></div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3"><img className="home17 pic"src="home17.png"></img></div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3"><img className="home18 pic"src="home18.png"></img></div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3"><img className="home19 pic"src="home19.png"></img></div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3"><img className="home20 pic"src="home20.png"></img></div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3"><img className="home21 pic"src="home21.png"></img></div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3"><img className="home22 pic"src="home22.png"></img></div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3"><img className="home23 pic"src="home23.png"></img></div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3"><img className="home24 pic"src="home24.png"></img></div>
        </div>
      </div>
      <div className="row row-footer">
        <div className="col-xs-12 col-sm-6 col-md-3 ">
          <img className='bnb' src="meta.bnb2.png"></img>
          <div className="socials">
            <img className="fb"src="facebook.png"></img>
            <img className='ig' src="instagram.png"></img>
            <img className='tweet' src="twitter.png"></img>
          </div>
          <h2 className='mbmb'><img className='copy' src="copyright.png"></img>2022 Metabnb</h2>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3 footer-col" >
          <ul className='list'>
            <li className='list-title'>Community</li>
            <span className='font'>
              <li>NFT</li>
              <li>Tokens</li>
              <li>Landlords</li>
              <li>Discord</li>
            </span>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3 footer-col">
          <ul className='list'>
            <li className='list-title'>Places</li>
            <span className='font'>
              <li>Castle</li>
              <li>Farms</li>
              <li>Beach</li>
              <li>Learn more</li>
            </span>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3 footer-col">
          <ul className='list'>
            <li className='list-title'>About Us</li>
            <span className='font'>
              <li>Road map</li>
              <li>Creators</li>
              <li>Career</li>
              <li>Contact us</li>
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlaceToStay;