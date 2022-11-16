import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='page'>
      {/* <h2>Home</h2> */}
      <div className="row">
        <div className="col-md-6">
          <h3 className='heading'>
            Rent a <span style={{color:" #A02279"}}  >Place</span> away from <span style={{color:" #A02279"}}  >Home</span> in the <span style={{color:" #A02279"}}  >Metaverse</span>
          </h3>
          <p className='paragraph'>
            we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your<br></br> imagination to reality at your comfort zone
          </p>
          <div className="input">
            <input className='txt' type="text" placeholder='Search for location'></input>
            <button  className="btn search">Search</button>
          </div>
        </div>
        <div className="col-md-5"><img className='pic1' src='layers.svg' alt="layers"></img></div>
        <img className='pic2' src='frame.png' alt='footer'></img>
      </div>
      <h3 className='inspo'>Inspiration for your next adventure</h3>
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3"><img className='home1 pic' src="home1.png"></img></div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3"><img className='home2 pic' src="home2.png"></img></div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3"><img className='home3 pic' src="home3.png"></img></div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3"><img className='home4 pic' src="home4.png"></img></div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3"><img className='home5 pic' src="home5.png"></img></div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3"><img className='home6 pic' src="home6.png"></img></div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3"><img className='home7 pic' src="home7.png"></img></div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3"><img className='home8 pic' src="home8.png"></img><br></br></div>
      </div>
      <div className="row page3">
        <div className="col-md-5">
          <h3 className='title'>Metabnb NFTs</h3>
          <p className='discover'>Discover our NFT gift cards collection.Loyal customers get amazing gift cards which are<br></br> traded as NFTs.These NFTs gives our customer access to loads of our exclusive services.</p>
          <button  className="learn">Learn more</button>
        </div>
        <div className="col-md-6"><img className='pic3' src='layers2.svg'></img></div>
      </div>
      <div className="row row-footer">
        <div className="col-xs-12 col-sm-6 col-md-3 ">
          <img className='bnb' src="meta.bnb2.png"></img>
          <div className="socials">
            <img className="fb"src="facebook.png"></img>
            <img className='ig' src="instagram.png"></img>
            <img className='tweet' src="twitter.png"></img>
          </div>
          <p className='mbmb'><img className='copy' src="copyright.png"></img>2022 Metabnb</p>
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

export default Home;