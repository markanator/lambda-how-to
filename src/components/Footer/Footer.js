import React from 'react';

import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-main">
            <Container fluid className='footer-container'>
                <Row>
                    <Col sm='4'>
                    <h5 className="footer-col-title">Guide Categories</h5>
                        <ul>
                            {/* Leftmost column */}
                            {/* Consider passing down array prop of category types and map them??? */}
                            <li className="list-unstyled">
                                <Link to="/">Cooking</Link>
                            </li>
                            <li className="list-unstyled">
                                <Link to="/">Crafts</Link>
                            </li>
                            <li className="list-unstyled">
                                <Link to="/">Outside</Link>
                            </li>
                            <li className="list-unstyled">
                                <Link to="/">Tech</Link>  
                            </li>
                        </ul>
                    </Col>
                    <Col sm='4' className='text-center'>
                        <h5 className="footer-col-title">About Us</h5>
                        <ul>
                            {/* Center Column */}
                            <li className="list-unstyled">
                                <a tag={Link} href="https://xenodochial-turing-fac98b.netlify.app/about-us">The Team</a>
                            </li>
                            <li className="list-unstyled">
                                <a tag={Link} href="https://xenodochial-turing-fac98b.netlify.app/about-us">Why Post</a>
                            </li>
                            <li className="list-unstyled">
                                <a tag={Link} href="https://xenodochial-turing-fac98b.netlify.app/about-us">Jobs</a>
                            </li>
                        </ul>
                    </Col>
                    <Col sm='4'>
                        <h5 className="footer-col-title">Resources</h5>
                        <ul>
                            {/* Right Most COlumn */}
                            <li className="list-unstyled">
                                <Link to="/">Sitemap</Link>
                            </li>
                            <li className="list-unstyled">
                                <Link to="/">Help!</Link>
                            </li>
                            <li className="list-unstyled">
                                <Link to="/">Contact</Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className='footer-copyright text-center'>
                <Container fluid>
                    <p>&copy; {new Date().getFullYear()} Copyright: Lambda How to</p>
                </Container>
            </div>
        </div>
    );
}

export default Footer;