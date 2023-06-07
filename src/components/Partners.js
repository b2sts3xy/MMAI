import React from 'react';
import '../style/Partners.css';

const Partners = () => {
    return (
        <div className='part'>
            <div className="box1">
                <a href='http://creativia.kr/'><img className="new_logo" src='./images/imgPartners/part1.webp' alt='이미지'/></a>
            </div>
            <div className="box2">
                <a href='https://www.ictcrc.org/'><img className="ictcrec4x" src='./images/imgPartners/part2.webp' alt='이미지'/></a>
            </div>
            <div className="box3">
                <a href='https://www.nslab.tech/'><img className="NSLAB4x" src='./images/imgPartners/part3.webp' alt='이미지'/></a>
            </div>
            <div className="box4">
                <a href='https://cognitgo.ai/'><img className="Logo-Dark" src='./images/imgPartners/part4.webp' alt='이미지'/></a>
            </div>
        </div>
    );
};

export default Partners;