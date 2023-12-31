import React from "react";
import {BsDatabaseGear, BsPersonFillGear, BsDatabaseCheck} from "react-icons/bs";
import {LiaIndustrySolid} from 'react-icons/lia'
import marketing from "../img/Marketing-01.png"
import Aboutani from "./Aboutani";
const AboutAreaOne = () => {
  return (
    <>
      {/* ================== AboutAreaOne start  ==================*/}
      <div className='about-area pt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
           
              <Aboutani mainImg={marketing}></Aboutani>
            </div>
            <div
              className='col-lg-6 '
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mt-5 mt-lg-0'>
                <h6 className='sub-title font-resp'>ABOUT US</h6>
                <h2 className='title'>
                Expertise In Diverse  <span>Marketing</span> Verticals

                   
                </h2>
            
                <div className='row '>
                  <div className='col-md-6 mt-4 mb-4'>
                    <div className='inner-top-card'>
                      <div className='thumber mb-3'>
                      <BsDatabaseGear className="about-icons"/>
                      </div>
                      <div className='details'>
                        <h5>Data-Driven Marketing Powerhouse</h5>
                        <p className="font-resp">
                        Galileo Data has more data sources than ever before, 
                        reach us to reach accurate data driven prospects within your budget
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6 mt-4 mb-4'>
                    <div className='inner-top-card'>
                      <div className='thumber mb-3'>
                      <BsPersonFillGear className="about-icons"/>
                      </div>
                      <div className='details'>
                        <h5>Seamless Management</h5>
                        <p className="font-resp">
                        We understand the need of the client and accordingly 
                        advise the best possible solution to help businesses grow
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-6 mt-4 mb-4'>
                    <div className='inner-top-card'>
                      <div className='thumber mb-3'>
                      <BsDatabaseCheck className="about-icons"/>
                      </div>
                      <div className='details'>
                        <h5>Quality Data Experts</h5>
                        <p className="font-resp">
                        Quality is our policy, so we’ll guarantee our business 
                        email data providing highest quality B2B data for email marketing
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-6 mt-4 mb-4'>
                    <div className='inner-top-card'>
                      <div className='thumber mb-3'>
                       <LiaIndustrySolid className="about-icons"/>
                      </div>
                      <div className='details'>
                        <h5>Industry Solutions</h5>
                        <p className="font-resp">
                        We provide the best industry trends covering various business & 
                        technology solutions tailored to any industry for all marketing needs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================== AboutAreaOne End  ==================*/}
    </>
  );
};

export default AboutAreaOne;
