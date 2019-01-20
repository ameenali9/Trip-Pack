import React from 'react';
import * as ROUTES from '../../constants/routes';
import '../../index.css';

const Landing = () => (
  <div>
    <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
       
        <nav id="main-nav">
            <div className="logo">
                {/* <a href="home"> */}
               <span>Trip</span>
                <span>Pack</span>
                {/* </a> */} 
            </div>

            <details>
                <summary>
                    <div className="closed">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <div className="open">
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </summary>
                <ul>
                    <li><a className="active" href="#jellyfish">Trip Pack</a></li>
                    <li><a href={ROUTES.SIGN_IN}>Log In</a></li>
                    <li><a href={ROUTES.SIGN_UP}>Sign up</a></li>
                    <li><a href="#road-lights">About</a></li>
                    <li><a href="#umbrella">Contact us</a></li>
                </ul>
            </details>

        </nav>
        <section id="jellyfish" data-tab="#jellyfish" className="active">

            <div className="box" id="jellyfish-home" data-target="#jellyfish-home">
                <h2>Trip Pack</h2>
                <h3>Typically, medusozoan cnidarians have a pelagic, predatory stage in their life cycle; staurozoans are the exceptions.</h3>
            </div>
            <div id="bg">
              <img src={require('./3.jpg')}  alt=""  />
            </div>
        </section> 
  </div>
);

export default Landing;
