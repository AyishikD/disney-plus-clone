// Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div style={styles.footerPanel2} className="footer-panel2">
                <div className="navFooterlinkCol">
                    <div style={styles.boldFooterLinkCol} className="footerlinkcol myedit-footlink-headings">Company</div>
                    <ul>
                        <li className="myedit-footerlinks"><a href="##">About</a></li>
                        <li className="myedit-footerlinks"><a href="##">Careers</a></li>
                    </ul>
                </div>

                
                <div className="navFooterlinkCol">
                    <div style={styles.boldFooterLinkCol} className="footerlinkcol myedit-footlink-headings">View Website in</div>
                    <ul>
                        <li className="myedit-footerlinks"><a href="##">English</a></li>
                    </ul>
                </div>
                <div className="navFooterlinkCol">
                    <div style={styles.boldFooterLinkCol} className="footerlinkcol myedit-footlink-headings">Need Help</div>
                    <ul>
                        <li className="myedit-footerlinks"><a href="##">Visit Help Center</a></li>
                        <li className="myedit-footerlinks"><a href="##">Share Feedback</a></li>
                    </ul>
                </div>
                <div className="navFooterlinkCol">
                    <div style={styles.boldFooterLinkCol} className="footerlinkcol myedit-footlink-headings">Contact Us</div>
                    <ul>
                        <li className="myedit-footerlinks"><a href="##">Facebook</a></li>
                        <li className="myedit-footerlinks"><a href="##">Twiter</a></li>
                    </ul>
                </div>
                
                {/* Add more navFooterlinkCol sections as needed */}
            </div>

            <div style={styles.footerPanel4} className="footer-panel4">
                <div className="pages">
                    <div className="copyright">
                        Copyright © <span id="year">{new Date().getFullYear()}</span>, STAR. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footerPanel2: {
        backgroundColor: '#222f3d',
        color: 'white',
        justifyContent: 'space-evenly',
        display: 'flex',
        padding: '50px',
        margin: '0 auto',
        flexWrap: 'wrap',
        gap: '30px',
    },
    footerPanel4: {
        backgroundColor: '#0F1111',
        color: 'white',
        height: '80px',
        fontSize: '0.90rem',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boldFooterLinkCol: {
        fontWeight: 'bold',  // Apply the 'bold' font weight to the specific element
    },
};

export default Footer;
