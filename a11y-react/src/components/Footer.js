import React from 'react';


const Footer = () => {
    return (
        <section class="footer">
            <div class="info">
                <h5>Kontakt Info:</h5>
                <p>Adress: Lorem Ipsum 99, 4567 Oslo</p>
                <p>Telefon nummer: 0708 - 42 ** *9.</p>
                <p>E-mail: loremipsum@testing.com</p>
                
            </div>
            <h6>All images are from: LogoMakr.com</h6>
            <div class="socialMedia">
                <h6>Follow us on:</h6>
                <img src="./images/facebook.png" class="mediaImage"></img>
                <img src="./images/twitter.png" class="mediaImage"></img>
                <img src="./images/instagram.png" class="mediaImage"></img>
            </div>
        </section>
    );
}

export default Footer;