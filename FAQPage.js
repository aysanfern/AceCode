import React from 'react';

import Header from '../partials/Header';
import FAQS from '../partials/FAQs';
import Footer from '../partials/Footer';

function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />
     
      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-20 pb-10 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-2 md:pb-2">
                <h1 className="h1 mb-4">FAQs</h1>
              </div>

              {/* Form */}
             
             <FAQS/>
            </div>
          </div>
        </section>

      </main>
    <Footer/>
    </div>
  );
}

export default FAQPage;