import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import PopUp from '../partials/PopUp';
import BottomAppBar from '../partials/BottomBar';

function HomePop() {
  const [open, setOpen] = React.useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };


  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />
      <PopUp open={open} setOpen={setOpen} />
      <BottomAppBar setOpen={setOpen} />
      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        {/* <Testimonials /> */}
        
        
        <Newsletter />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default HomePop;