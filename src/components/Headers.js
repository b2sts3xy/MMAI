import React from 'react';
import "../style/Headers.css"

const Headers = () => {
    return (
        <section className='header_container'>
            <div className='header_left'>
                <spen className='header_name'>MMAI</spen>
            </div>
            <div className='header_center'>
                <spen className='header_categori1'>Home</spen>
                <spen className='header_categori2'>MMAI Solution</spen>
                <spen className='header_categori2'>MMAI Gallery</spen>
                <spen className='header_categori2'>Partners</spen>
                <spen className='header_categori2'>MMAI blog</spen>
            </div>
            <div className='header_right'>
                <a href='https://twitter.com/metamonkey_ai' className='header_sns'>twitter</a>
                <a href='https://t.me/MMAI_Official' className='header_sns'>telegram</a>
                <a href='https://www.youtube.com/channel/UCp0Bou6D571oZ_LTeUBd0EQ' className='header_sns'>Youtube</a>
                </div>
        </section>
    );
};

export default Headers;