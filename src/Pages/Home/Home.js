import React from 'react';
import Ability from '../Ability/Ability';
import Banner from '../Banner/Banner';
import ShortServices from '../ShortServices/ShortServices';

const Home = () => {
    return (
        <div>
            <Banner/>
            <ShortServices/>
            <Ability/>
        </div>
    );
};

export default Home;    