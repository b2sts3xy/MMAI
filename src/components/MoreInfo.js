import React, {useEffect, useState} from 'react';
import "../style/MoreInfo.css"

const MoreInfo = ({whatInfo, setInfoState}) => {

    const infos = {
        "world" : {
            imgs : [
                <img onClick={(e) => {
                    e.stopPropagation()
                    on1thMain()
                }} src='./images/imgInfo/world_1.webp' alt='MMAI MORE INFO'/>, <img onClick={(e) => {
                    e.stopPropagation()
                    on2thMain()
                }} src='./images/imgInfo/world_2.webp' alt='MMAI MORE INFO'/>, <img onClick={(e) => {
                    e.stopPropagation()
                    on3thMain()
                }} src='./images/imgInfo/world_3.webp' alt='MMAI MORE INFO'/>
            ],
            text : `MMAI PureWorld is a virtual world where users can socialize, be entertained, 
            and do business in the most realistic way possible. MMAI PureWorld offers 
            various features that make it stand out from other metaverses:\n
            
            Firstly, MMAI PureWorld specializes in providing an immersive virtual 
            business experience. Users can participate in virtual e-commerce, host events 
            in arenas, advertise on digital billboards, collaborate with your colleagues, rent 
            out virtual booths for conventions, and even have the option to drive virtual 
            cars and race them! All of these features provide users with a realistic 
            experience that emulates the real world.\n
            
            Secondly, MMAI PureWorld has an interactive community where people can 
            interact with one another in a safe and secure environment. MMAI PureWorld 
            has a variety of activities t hat people can participate in, including 
            tournaments, gaming, dating, virtual stores, chat rooms, and much more! By 
            offering a safe and realistic virtual business experience, MMAI PureWorld 
            provides users with an opportunity to gain skills that are useful in the real 
            world. MMAI PureWorld allows users to socialize, be entertained, and conduct 
            business in an atmosphere that is similar to the real world. MMAI PureWorld 
            is a great place for entrepreneurs and business professionals alike!\n
            
            Finally, MMAI PureWorld is committed to providing the best experience for its 
            users. MMAI PureWorld is always innovating and adding new features to its 
            platform, from tournaments and events to new services and products. MMAI 
            PureWorld is also constantly improving its security measures to ensure the 
            safety of all users.\n
            
            So come join MMAI PureWorld, coing soon, and experience what it's like to do 
            real life-like business and fun in our virtual reality!`
        },
        "wallet" : {
            imgs : [
                <img onClick={(e) => {
                    e.stopPropagation() 
                    on1thMain()
                }} src='./images/imgInfo/wallet_1.webp' alt='MMAI MORE INFO'/>, <img onClick={(e) => {
                    e.stopPropagation()
                    on2thMain()
                }} src='./images/imgInfo/wallet_2.webp' alt='MMAI MORE INFO'/>, <img onClick={(e) => {
                    e.stopPropagation()
                    on3thMain()
                }} src='./images/imgInfo/wallet_3.webp' alt='MMAI MORE INFO'/>
            ],
            text : `MMAI PureWallet is the world's first and only cryptocurrency wallet that allows you to do offline peer-to-peer payment transactions. Another new and unique quality of our PureWallet is that it
            provides secure software based cold storage without the need for costly additional hardware.\n
            
            At MMAI, we believe in taking financial freedom to new heights. MMAI PureWallet offers you a fast, secure and convenient way to manage your digital assets, allowing you to take control of
            your financial future. MMAI PureWallet is the ideal solution for those looking for an easy-to-use cryptocurrency wallet that provides maximum security with convenience and allows for offline
            peer-to-peer payments.\n
            
            We understand the importance of secure storage when it comes to cryptocurrency, which is why MMAI PureWallet allows you to securely store your digital assets in our software-based cold
            storage solution. MMAI PureWallet also offers you the ability to send and receive payments with ease while ensuring that your transactions remain secure.\n
            
            With MMAI PureWallet, you can securely store your digital assets in our software-based cold wallet storage solution without the need for costly and inconvenient additional hardware. MMAI PureWallet also offers you the ability to do offline peer-to-peer payment transactions, making it one of the most convenient cryptocurrency wallets available on the market today. MMAI PureWallet was specifically designed with the user in mind. We understand that many individuals are not technically savvy, so MMAI PureWallet has been designed to ensure that it is easy to use for all types of users. MMAI PureWallet is the perfect solution for those looking for a secure, convenient and user-friendly cryptocurrency wallet with powerful features. So if you're looking for an easy and secure way to manage your digital assets, MMAI PureWallet is the perfect choice. Get started today and take control of your financial future with MMAI PureWallet.\n
            
            Thank you for choosing MMAI PureWallet! We are proud to provide the best cryptocurrency
            wallet solution available on the market.`
        },
        "games" : {
            imgs : [
                <img onClick={(e) => {
                    e.stopPropagation()
                    on1thMain()
                }} src='./images/imgInfo/games_1.webp' alt='MMAI MORE INFO'/>, <img onClick={(e) => {
                    e.stopPropagation()
                    on2thMain()
                }} src='./images/imgInfo/games_2.webp' alt='MMAI MORE INFO'/>, <img onClick={(e) => {
                    e.stopPropagation()
                    on3thMain()
                }} src='./images/imgInfo/games_3.webp' alt='MMAI MORE INFO'/>
            ],
            text : `MMAI PureWorld: PureSoldiers
            In MMAI PureWorld, players can experience the thrill of being a soldier in an immersive third-person shooter game. \n
            MMAI PureWorld: Soldiers provides an authentic military experience with realistic graphics and sound effects. \n
            Players have to navigate their way through dangerous missions while following orders from their commanding officers.\n 
            MMAI PureWorld: Soldiers also features a variety of weapons and equipment that players can use to complete their objectives. \n
            Players are rewarded with points and experience that they can use to upgrade their character's stats and get new weapons. \n
            MMAI PureWorld: Soldiers is an intense, action-packed game that provides a unique experience for players who want to live out their military fantasies in the MMAI PureWorld metaverse. \n
            So join MMAI PureWorld and become a soldier today! Prove your worth on the battlefield and complete your mission with honor and glory. MMAI PureWorld: Soldiers awaits you! Coming soon!`
        }
    }

    const [infoImg1, setInfoImg1] = useState(0)
    const [infoImg2, setInfoImg2] = useState(1)
    const [infoImg3, setInfoImg3] = useState(2)

    const on1thMain = () => {
        setInfoImg1(0)
        setInfoImg2(1)
        setInfoImg3(2)
    }
    
    const on2thMain = () => {
        setInfoImg1(1)
        setInfoImg2(0)
        setInfoImg3(2)
    }
    
    const on3thMain = () => {
        setInfoImg1(2)
        setInfoImg2(1)
        setInfoImg3(0)
    }

    const infoText = () => {
        return <p>
            {infos[whatInfo].text.split("\n").map((txt) => 
                <>{txt}<br /></>
            )}
        </p>
    }

    const onCloseInfo = () => {
        setInfoState(false);
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
        <div className='moreinfo_out' onClick={onCloseInfo}>
            <div className='moreinfo_container'>
                <div className='moreinfo_img'>
                    <div className='moreinfo_mainimg'>{infos[whatInfo].imgs[infoImg1]}</div>
                    <div className='moreinfo_subimg'>
                        {infos[whatInfo].imgs[infoImg2]}
                        {infos[whatInfo].imgs[infoImg3]}
                    </div>
                </div>
                <div className='moreinfo_text' onClick={(e) => e.stopPropagation()}><div className='moreinfo_textbox'>{infoText()}</div></div>
            </div>
        </div>
    );
};

export default MoreInfo;