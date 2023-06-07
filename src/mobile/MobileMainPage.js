import React from 'react';
import MobileMain from './MobileMain';
import MoblieWorld from './MobileWorld';
import MoblieWallet from './MobileWallet';
import MobileFunc from './MobileFunc';
import MoblieToken from './MobileToken';
import MobileWhitePapers from './MobileWhitePapers';
import MobilePartners from './MobilePartners';
import MobileFooter from './MobileFooter';
import MobileGames from './MobileGames';

const MobileMainPage = () => {
    return (
        <>
            <MobileMain />
            <MoblieWorld />
            <MobileGames />
            <MoblieWallet />
            <MobileFunc />
            <MoblieToken />
            <MobileWhitePapers />
            <MobilePartners />
            <MobileFooter />
        </>
    );
};

export default MobileMainPage;