import React, { useState } from 'react';
import "../style/MarketPlacePopUp.css";

const MarketPlacePopUp = () => {

    const [popUpState, setPopUpState] = useState(true);

    const onPopUpState = () => {
        setPopUpState(!popUpState)
    }

    return (
        <>
            <div className={(popUpState) ? 'popup_container' : 'popup_container_none'}>
                <div className='popup_box'>
                    <div className='popup_link'>
                        <a href='https://mmaipure.com/marketplace/' target="_blank" rel="noopener noreferrer" aria-label="Go MMAI MARKETPLACE"><img className='popup_linkImg' src='./images/img/pop_button.png' alt='Go MARKETPLACE Button' /></a>
                    </div>
                </div>
                <span onClick={onPopUpState} className='popup_closebtn'>close</span>
            </div>
        </>
    );
};

export default MarketPlacePopUp;