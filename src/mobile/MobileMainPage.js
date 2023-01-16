import React from 'react';
import MobileMain from './MobileMain';
import MoblieWorld from './MobileWorld';
import MoblieWallet from './MobileWallet';
import MobileFunc from './MobileFunc';
import MoblieToken from './MobileToken';
import MobileWhitePapers from './MobileWhitePapers';
import MobilePartners from './MobilePartners';
import MobileFooter from './MobileFooter';

const MobileMainPage = () => {
    return (
        <>
            <MobileMain />
            <MoblieWorld />
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