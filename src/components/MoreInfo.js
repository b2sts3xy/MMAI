import React, {useEffect} from 'react';
import "../style/MoreInfo.css"

const MoreInfo = ({whatInfo}) => {

    const images = {
        "world" : {
            imgs : [
                "./images/imgInfo/world_1.webp", "./images/imgInfo/world_2.webp", "./images/imgInfo/world_3.webp"
            ]
        },
        "wallet" : {
            img : [
                "./images/imgInfo/wallet_1.webp", "./images/imgInfo/wallet_2.webp", "./images/imgInfo/wallet_3.webp"
            ]
        },
        "games" : {
            img : [
                "./images/imgInfo/games_1.webp", "./images/imgInfo/games_2.webp", "./images/imgInfo/games_3.webp"
            ]
        }
    }

    useEffect(() => {
        document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
        return () => {
          const scrollY = document.body.style.top;
          document.body.style.cssText = '';
          window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
      }, []);

    return (
        <div className='moreinfo_container'>

        </div>
    );
};

export default MoreInfo;