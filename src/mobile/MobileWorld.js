import React from 'react';
import '../mobileStyle/MobileWorld.css'
import MobileAP from './MobileAP';

const MoblieWorld = () => {
    return (
        <section>
            <div className='mobileWorldContents'>
                <div className='mobileWorldContents1'>MMAI PUREWORLD</div>
                <div className='mobileWorldContents2'>MMAI Metaverse World</div>
                <div className='mobileWorldContents3'>We offer complete solutions for your business to integrate into the digital world, from creating your virtual store to managing your inventory and hosting your store on our MetaMonkey AI Mall</div>
            </div>
            <MobileAP />
            <div className='mobileWorldVideo'>
                <a href='./imgMobile/mmaiworld.mp4'><img id='mobileWorldVideoImg' src='./imgMobile/mobile_world_video.webp' /></a>
            </div>
        </section>
    );
};

export default MoblieWorld;