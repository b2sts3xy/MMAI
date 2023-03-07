import React from 'react';
import WorldGallery from '../components/WorldGallery';
import '../mobileStyle/MobileWorld.css'

const MoblieWorld = () => {
    return (
        <section>
            <div className='mobileWorldContents'>
                <div className='mobileWorldContents1'>MMAI PUREWORLD</div>
                <div className='mobileWorldContents2'>MMAI Metaverse World</div>
                <div className='mobileWorldContents3'>We offer complete solutions for your business to integrate into the digital world, from creating your virtual store to managing your inventory and hosting your store on our MetaMonkey AI Mall</div>
            </div>
            <WorldGallery />
            <div className='mobileWorldVideo'>
                <img id='mobileWorldVideoImg' src='./images/imgMobile/mobile_world_video.webp' alt='mmaipure world video'/>
                <div className='mobileWorldVideo_btn'>
                    <a href='./video/mmaiworld.mp4'><img id='mobileWorldVideoImg_btnImg' src='./images/imgNew/play_btn.webp' alt='mmaipure world video'/></a>
                </div>
            </div>
        </section>
    );
};

export default MoblieWorld;