import React from 'react';
import GamesGallery from '../components/GamesGallery';
import '../mobileStyle/MobileGames.css'

const MobileGames = () => {

    const onMP = () => {
        window.open('https://mmaipure.com/marketplace/', '_blank')
    }

    return (
        <section>
            <div className='mobile_games_main_container'>
                <img className='mmai_games_img' src='./images/imgMobile/mmai_games_main.webp' alt='MMAI GAMES'/>
                <div className='mobile_games_btn_box'>
                    <div className='mg_btn' onClick={onMP}>Keys To The City</div>
                </div>
            </div>
            <div className='mobileGamesContents'>
                <div className='mobileGamesContents1'>MMAI's Key-to-the-City NFT required for early play</div>
                <div className='mobileGamesContents2'>MMAI GAEMS</div>
                <div className='mobileGamesContents3'>PureSoldier is a military-style 3rd person shooter game set in the MMAI PureWorld metaverse. Engage in thrilling battles with realistic weapons and take on intense missions as you become immersed in the action. Gear up and join the fight!</div>
            </div>
            <GamesGallery />
            <div className='mobileGamesVideo'>
                <img id='mobileGamesVideoImg' src='./images/imgMobile/mobile_games_video.webp' alt='mmaipure world video'/>
                <div className='mobileGamesVideo_btn'>
                    <a href='./images/video/mmaigames.mp4'><img id='mobileGamesVideoImg_btnImg' src='./images/imgNew/play_btn.webp' alt='mmaipure games video'/></a>
                </div>
            </div>
        </section>
    );
};

export default MobileGames;