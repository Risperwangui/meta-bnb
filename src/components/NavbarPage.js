import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Modal } from '@mantine/core';
import { AiOutlineRight } from "react-icons/ai";
import Container from 'react-bootstrap/Container';
import {Nav, Navbar} from 'react-bootstrap';


const NavbarPage = () => {  
const [opened, setOpened] = useState(false);
  return (
    <header meta name="viewport" content="width=device-width, initial-scale=1">
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <img src= "meta.bnb.png" alt="logo" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item home">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item l">
                        <Link className="nav-link place" to="/placetostay">Place to stay</Link>
                    </li>
                    <li className="nav-item l nfts">
                        <Link className="nav-link" to="/nfts">NFTs</Link>
                    </li>
                    <li className="nav-item l commmunity">
                        <Link className="nav-link" to="/community">Community</Link>
                    </li>
                    <li className="nav-item button">
                    <input className="btn btn1" type='button' onClick={() => setOpened(true)} value="Connect Wallet"></input>          
                    </li>
                </ul>
            </div>
        </nav> */}
        <Navbar collapseOnSelect className="bg-transparent" expand='lg'>
            <Container>
                <Navbar.Brand href="/"><img src= "meta.bnb.png" alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item>
                        <Nav.Link eventKey="1" as={Link} to="/" className='home'>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="1" as={Link} to="/placetostay" className='l2'>Place to stay</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="1" as={Link} to="/nfts" className='l'>NFTS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="1" as={Link} to="/community" className='l'>Community</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <input className="btn btn1" type='button' onClick={() => setOpened(true)} value="Connect Wallet"></input>
                    </Nav.Item>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <>
            <Modal id='modal' centered
                size="md"
                overlayOpacity={0.25}
                styles={{ modal: { borderRadius: 12
                 } }}
                opened={opened}
                onClose={() => setOpened(false)}
                transition="slide-left" duration={400} timingFunction="ease"   
                title="Connect Wallet"
            >
                {/* Modal content */}
                <hr className='hr'></hr>
                <small id="choose">Choose your preferred wallet:</small>
                <button className='btn btn2 w-100'><img className='nyau' src="meta.mask.png" alt="nyau"></img> &nbsp;&nbsp;Metamask <AiOutlineRight className='icon'/></button><br></br><div className='space'></div>
                <button className='btn btn3 bg-transparent w-100'> <img className='connect' src="connect.png" alt="connect"></img> &nbsp;&nbsp;WalletConnect <AiOutlineRight className='icon'/></button>
            </Modal>
        </>
    </header>
  );
};

export default NavbarPage;