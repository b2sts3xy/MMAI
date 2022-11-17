import React from 'react';
import '../style/Partners.css';

const Partners = () => {
    return (
        <div className='part'>
            <div className="box1">
                <a href='http://creativia.tech/'><img className="new_logo" src='./imgPartners/part1.png' alt='이미지'/></a>
            </div>
            <div className="box2">
                <a href='https://www.ictcrc.org/'><img className="ictcrec4x" src='./imgPartners/part2.png' alt='이미지'/></a>
            </div>
            <div className="box3">
                <a href='https://www.nslab.tech/'><img className="NSLAB4x" src='./imgPartners/part3.png' alt='이미지'/></a>
            </div>
            <div className="box4">
                <a href='https://cognitgo.ai/'><img className="Logo-Dark" src='./imgPartners/part4.png' alt='이미지'/></a>
            </div>
        </div>
    );
};

export default Partners;