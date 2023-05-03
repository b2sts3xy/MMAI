import React from "react";
import "../style/Headers.css";
import { Link } from "react-router-dom";

const Headers = () => {
  const reload = () => {
    window.location.replace("/");
  };

  return (
    <section className="header_container">
      <div className="header_left">
        <img
          className="header_name"
          onClick={reload}
          src="./images/imgHeader/mmai_logo.png"
          alt="MMAI MAIN LOGO"
        />
      </div>
      <div className="header_center">
        <span className="header_categori1" onClick={reload}>
          Home
        </span>
        <a
          href="https://go.mmaipure.com/nft-sale"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go MMAI NFT SALE"
          className="header_categori2"
        >
          MMAI NFT SALE
        </a>
        <a
          href="https://blog.mmaipure.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go MMAI BLOG"
          className="header_categori2"
        >
          MMAI BLOG
        </a>
        <Link className="header_categori2" to="/board">
          Board
        </Link>
        {/* <span onClick={onSolutionClick} className='header_categori2'>MMAI SOLUTIONS</span>
                <span onClick={onGalleryClick} className='header_categori2'>MMAI GALLERY</span>
                <span onClick={onPartnerClick} className='header_categori2'>PARTNERS</span> */}
      </div>
      <div className="header_right">
        <a
          href="https://www.youtube.com/channel/UCp0Bou6D571oZ_LTeUBd0EQ"
          target="_blank"
          rel="noopener noreferrer"
          className="header_sns"
        >
          <img
            src="./images/imgHeader/youtube.png"
            className="header_sns_img"
            alt="MMAI YouTube"
          />
        </a>
        <a
          href="https://t.me/MMAI_Official"
          target="_blank"
          rel="noopener noreferrer"
          className="header_sns"
        >
          <img
            src="./images/imgHeader/telegram.png"
            className="header_sns_img"
            alt="MMAI Telegram"
          />
        </a>
        <a
          href="https://twitter.com/metamonkey_ai"
          target="_blank"
          rel="noopener noreferrer"
          className="header_sns"
        >
          <img
            src="./images/imgHeader/twitter.png"
            className="header_sns_img"
            alt="MMAI Twitter"
          />
        </a>
      </div>
    </section>
  );
};

export default Headers;
