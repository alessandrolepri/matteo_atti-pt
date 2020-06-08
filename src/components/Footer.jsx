import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {

    return (
        <footer class="mainfooter" role="contentinfo">
            <div class="footer-middle">
            <div class="container">
                <div class="row">
                <div class="col-md-3 col-sm-6">

                    <div class="footer-pad">
                    <h4>Service</h4>
                    <ul class="list-unstyled">
                        <li><a href="#"></a></li>
                        <li><a href="#">Payment Center</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">

                    <div class="footer-pad">
                    <h4>Company</h4>
                    <ul class="list-unstyled">
                        <li><a href="#">Accessibility</a></li>
                        <li><a href="#">Disclaimer</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">

                    <div class="footer-pad">
                    <h4>Support</h4>
                    <ul class="list-unstyled">
                    <Link to='/contact'>
                        <li>Contact</li>
                    </Link>
                    </ul>
                    </div>
                </div>
                <div class="col-md-3">
                <h4>Follow Me</h4>
                        <ul class="social-network social-circle">
                        <li><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                        </ul>				
            </div>
                </div>
            <div class="row">
            <div class="col-md-12 copy">
            <p class="text-center">&copy; Copyright 2020 - Company Name.  All rights reserved.</p>
            </div>
            </div>
            </div>
            </div>
            </footer>
)
}

export default Footer;