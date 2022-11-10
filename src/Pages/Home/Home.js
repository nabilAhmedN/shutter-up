import React from 'react';
import Ability from '../Ability/Ability';
import Banner from '../Banner/Banner';
import useTitle from '../hooks/useTitle';
import ShortServices from '../ShortServices/ShortServices';
import Work from '../Work/Work';

const Home = () => {
    useTitle("Home");
    return (
        <div>
            <Banner/>
            <ShortServices/>
            <Ability/>
            <Work/>
        </div>
    );
};

export default Home;    