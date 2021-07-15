import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Countdown from 'react-countdown';
import MailChimp from './MailChimp';
import {ArticleContext} from '../global'
import {useContext} from 'react'

function Newsletter() {
  const [subscribed,setSubscribed]=useState(false)
  const handleSubmit= ()=>{
    setSubscribed(true)
  }
  const [date,setDate]=useContext(ArticleContext)
  const dated = new Date(date[0].date)
  return (
    <section>
      <div className="max-w-6xl mt-10 mx-auto px-4 sm:px-6" >
        <div className="pb-5 md:pb-5">

          {/* CTA box */}
          <div className="relative bg-blue-200 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
                    <stop stopColor="#DFDFDF" offset="0%" />
                    <stop stopColor="#4C4C4C" offset="44.317%" />
                    <stop stopColor="#333" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#FFF">
                    <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                    <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                    <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                    <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>
            
            <div className="relative flex flex-col lg:flex-row justify-between items-center">
            { !subscribed? (
              
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-black mb-2">Join our FREE data science workshop</h3>
                <p className="text-grey-800 text-lg mb-6"> Data science workshop for kids and complete beginners
                where we introduce data science and even create your very first data science program in Python!</p>

                {/* CTA form */}
              
                <div className='mt-2 mb-3 text-red-400 text-2xl'>
                  Workshop in &nbsp;
                  <Countdown date={date[0].date}  zeroPadDays='0'/>
                  &nbsp; days
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
               
                    
{/*                     
                  <input type="email" required className="w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-400" placeholder="Your email…" aria-label="Your email…" />
                  <input type="text" className="w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-400" placeholder="Name of student" aria-label="Your email…" /> */}


<MailChimp
        setSubscribed={setSubscribed}
        action='https://acecode.us6.list-manage.com/subscribe/post?u=8976616feb3cba853939dee0a&amp;id=6f84446596'
        fields={[
          
            {
                name: 'EMAIL',
                placeholder: 'Email',
                type: 'email',
                required: true,
                
              },
              {
                name: 'FNAME',
                placeholder: 'Name of student',
                type: 'text',
                required: true,
                
              }
            
          





          ]}
          className='form__field'
         
        />
       
                  </div>
                  {/* Success message */}
                  {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                  
                
              </div>
            ): <>
            <div className="col-span-9">
               <div className="text-center lg:text-left lg:max-w-xl">
                <h2 className="h2 text-black mb-2 align">You're booked in! <br/> {dated.toLocaleString('en-uk', {  weekday: 'long' })} {dated.getDate()} {dated.toLocaleString('en-uk', { month: 'long' })} {dated.toLocaleTimeString('en-uk',{hour: '2-digit', minute:'2-digit'})}pm</h2>
                <p className="text-gray-900 text-xl mb-6"> You will shortly receive an email with full details on how to join.</p>
                
                <p className="text-gray-800 text-lg mb-6"> 
                The workshop will be hosted over <span className='text-red-700 text-xl'>Zoom</span> 
                <br/>
                Zoom meeting ID: <span className='text-red-700 text-xl'>236 182 6089</span>
                <br/>
                Duration: <span className='text-red-700 text-xl'>90 minutes </span> 
                <br/>
                <span className='text-red-700 text-xl'>Instructions:</span>  Download Zoom and copy and paste the meeting code to join the meeting. A computer/laptop is preferable for the coding  section of the workshop. Please arrive
                on time so you don't miss out!
                </p>

                </div>
                </div>
            
            
            </> }

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Newsletter;
