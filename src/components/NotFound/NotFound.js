import React, { Component } from 'react';
import PageHero from '../PageHero/PageHero';

const NotFound = () => {
    return (  
        <div>
            <PageHero>Content Not Found</PageHero>
            <img className='img-fluid mx-auto d-block' src="/images/404.jpg" alt="" />
        </div>
    );
}
 
export default NotFound;