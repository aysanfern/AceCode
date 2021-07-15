import React from 'react';
import { Link } from 'react-router-dom';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

import Header from '../partials/Header';

function FreeLesson() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mt-5 mx-auto px-4 sm:px-6">
            <div className="pt-10 pb-12 md:pt-10 md:pb-20">

              {/* Page header */}
              

              {/* Form */}
              <Newsletter/>
              

            </div>
          </div>
        </section>

      </main>
    <Footer/>
    </div>
  );
}

export default FreeLesson;