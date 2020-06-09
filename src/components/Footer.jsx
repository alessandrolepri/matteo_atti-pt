import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {

    return (
        <footer className="mainfooter" role="contentinfo">
            <div className="footer-middle">
            <div className="container">
                <div className="row">
                <div className="col-md-3 col-sm-6">

                    <div className="footer-pad">
                    <h4>Service</h4>
                    <ul class="list-unstyled">
                        <li><a href="#"></a></li>
                        <li><a href="#">Payment Center</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">

                    <div className="footer-pad">
                    <h4>Company</h4>
                    <ul className="list-unstyled">
                        <li><a href="#">Accessibility</a></li>
                        <li><a href="#">Disclaimer</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">

                    <div className="footer-pad">
                    <h4>Support</h4>
                    <ul className="list-unstyled">
                    <Link to='/contact'>
                        <li>Contact</li>
                    </Link>
                    </ul>
                    </div>
                </div>
                <div className="col-md-3">
                <h4>Follow Me</h4>
                        <ul className="social-network social-circle">
                        <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                        </ul>				
            </div>
                </div>
            <div className="row">
            <div className="col-md-12 copy">
            <p className="text-center">&copy; Copyright 2020 - Company Name.  All rights reserved.</p>
            </div>
            </div>
            </div>
            </div>
            </footer>
)
}

export default Footer;