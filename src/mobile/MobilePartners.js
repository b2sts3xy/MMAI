import React from 'react';
import '../mobileStyle/MobilePartners.css'

const MobilePartners = () => {
    return (
        <section className='mobilePartnersContainer'>
          <div className='mobilePartnersTitle'>AI Technology Partners</div>  
          <div className='mobilrPartners'>
            <div className='mobilePartnersBox'>
                <a href='http://creativia.tech/'><img src='./imgPartners/part1.webp' alt='mobile partners1' /></a>
            </div>
            <div className='mobilePartnersBox'>
                <a href='https://www.ictcrc.org/'><img src='./imgPartners/part2.webp 'alt='mobile partners2' /></a>
            </div>
            <div className='mobilePartnersBox'>
                <a href='https://www.nslab.tech/'><img src='./imgPartners/part3.webp' alt='mobile partners3' /></a>
            </div>
            <div className='mobilePartnersBox'>
                <a href='https://cognitgo.ai/'><img src='./imgPartners/part4.webp' alt='mobile partners4' /></a>
            </div>
          </div>
        </section>
    );
};

export default MobilePartners;