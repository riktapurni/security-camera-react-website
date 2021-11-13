import React from 'react';
import AllREviews from '../../Dashboard/AllReviews/AllREviews';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <Products></Products>
        <AllREviews></AllREviews>
        <Contact></Contact>
        <Footer></Footer>
        </div>
    );
};

export default Home;