import React, { useState } from 'react';
import Footer from './Footer';
import "../style/Notice.css"
import Headers from './Headers';

const Notice = () => {

    return (
        <>
          <Headers />
          <div className='middle'>
            
          </div>
          <div className='bottom'>
            <Footer/>
          </div>
        </>
    );
};

export default Notice;