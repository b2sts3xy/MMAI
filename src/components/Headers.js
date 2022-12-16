import React from 'react';
import "../style/Headers.css"

const Headers = ({onSolutionClick,onGalleryClick, onPartnerClick}) => {

    const onBlogClick = () => {
        alert("Coming Soon!")
    }

    const reload = () => {
        window.location.replace('/');
    }

    return (
        <section className='header_container'>
            <div className='header_left'>
                <spen onClick={reload} className='header_name'>MMAI</spen>
            </div>
            <div className='header_center'>
                <spen className='header_categori1'>Home</spen>
                <spen onClick={onSolutionClick} className='header_categori2'>MMAI SOLUTIONS</spen>
                <spen onClick={onGalleryClick} className='header_categori2'>MMAI GALLERY</spen>
                <spen onClick={onPartnerClick} className='header_categori2'>PARTNERS</spen>
                <a href='https://blog.mmaipure.com/' className='header_categori2'>MMAI BLOG</a>
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