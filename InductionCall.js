import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import Testimonials from '../partials/Testimonials';
import Footer from '../partials/Footer';

function InductionCall() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
           

              {/* Page header */}
            
              <br/>
              {/* Form */}
             <Testimonials/>
             

            </div>
        
        </section>

      </main>
      <Footer/>
    </div>
  );
}

export default InductionCall;