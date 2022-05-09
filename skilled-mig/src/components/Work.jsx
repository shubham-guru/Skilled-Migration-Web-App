import React, { useState, useEffect } from "react";
import "./css/work.css";
import work1 from '../images/work1.jpg';
import work2 from '../images/work2.jpg';
import work3 from '../images/work3.jpg';
import Footer from '../components/Footer';

const Work = () => {
 
    return(
        <>
          <div align="center" style={{backgroundColor: "#fff"}}>
          <div style={{display: "flex"}}>
          <div style={{width: "50%", textAlign: "right"}}>
            <h2 className="subHeading">WO</h2>
          </div>
          <div style={{width: "50%", textAlign: "left"}}>
            <h2 className="subHeading" style={{backgroundColor: "#fff", color: "#000"}}>RK</h2>
          </div>
          </div>
         
          <div className="innerDiv">
            <p>
            <h2>
              WORK & SETTLE ABROAD WITH YOUR FAMILY
              </h2>
              Do you want to build a career and life abroad? 
              As one of the world’s leading overseas career specialists and a leading work visa 
              agent, skilled migration has helped thousands of individuals and families settle in 
              the world’s most liveable countries. We’ve seen first hand how moving abroad can 
              dramatically improve not just the migrant’s life but that of their family and parents. 
              With our comprehensive overseas career solutions, we are the no.1 choice for 
              professionals seeking to work abroad.
            </p>
            <img src={work3} alt="work_pic" width="50%" />
          </div>

          <div className="innerDiv">
          <img src={work2} alt="work_pic" width="50%" />
            <p>
            <h2>
            END TO END JOB SEARCH SERVICES
              </h2>
              Skilled Migration has streamlined the steps involved in working abroad to make your 
              journey smoother. Our process is aimed at making your profile more accessible, 
              attractive and engaging. Our services begin with helping you create a resume that 
              meets international standards and help you craft an engaging LinkedIn profile. We 
              then market your profile in the countries of your choice and work to get you interview 
              calls. A dedicated Job Search consultant will work with you on your international career, 
              guiding you through the process.
            </p>
          </div>

          <div className="innerDiv">
            <p>
            <h2>
            OUR JOB SEARCH SERVICES INCLUDE THE FOLLOWING:
              </h2>
             <ul>
                 <li><b>Job Search Strategy Report: </b>With the help of experts, we create a 
                 comprehensive report based on your profile and decide on positioning it in your 
                 target country.</li>
                 <li><b>Opportunity Research: </b> We identify industry trends and job sources 
                 to get you more job offers. We help you modify your profile to present it on different 
                 platforms.</li>
                 <li><b>Job Applications: </b> We register your profile on various portals and job 
                 sites and even apply to relevant job postings on your behalf.</li>
             </ul>
            </p>
            <img src={work1} alt="work_pic" width="50%" />
          </div>

          <div style={{display: "flex"}}>

          <div style={{width: "50%", textAlign: "right"}}>
            <h2 className="subHeading">OUR SE</h2>
          </div>
          <div style={{width: "50%", textAlign: "left"}}>
            <h2 className="subHeading" style={{backgroundColor: "#fff", color: "#000"}}>RVICES</h2>
          </div>
          </div>

            <div className="ourServices">
                <div>
                    <h1>WHY WORK ABROAD ?</h1>
                    <p>Working abroad can dramatically transform your life and career. 
                        Working abroad is the perfect option for you if you plan to :</p>
                    <ul>
                        <li>
                        Grow your career and have international mobility
                        </li>
                        <li>
                        Earn dollar salaries leading to higher saving
                        </li>
                        <li>
                        Live in well-developed countries
                        </li>
                        <li>
                        Have access to world-class education & healthcare
                        </li>
                        <li>
                        Gain access to citizen benefits
                        </li>
                        <li>
                        Get a powerful passport that facilitates international travel
                        </li>
                        <li>
                        Transform your family’s life
                        </li>
                    </ul>
                </div>

                <div>
                    <h1>HOW CAN WE HELP YOU?</h1>
                    <p>Thousands of professionals approach us every year to help them realize 
                        their overseas career ambitions. Our suite of services includes:</p>
                    <ul>
                        <li>
                        <b>Resume Writing Services: </b>Ensure your resume meets international 
                        standards and showcases your strengths
                        </li>
                        <li>
                        <b>LinkedIn Marketing: </b>Improve your chances of getting discovered online 
                        by recruiters and companies with our LinkedIn marketing solutions                        
                        </li>
                        <li>
                        <b>Resume Marketing: </b>Be present in your target country’s job market
                        with our Resume Marketing services that apply for jobs on your behalf through 
                        overseas job boards, classifieds & job postings
                        </li>
                       <p>With skilled migration, you not only discover opportunities that are best 
                           suited for you but also get the tools and experience to help you with the 
                           highest chances of success. Talk to us today to begin your journey of 
                           working abroad.</p>
                    </ul>
                </div>
            </div>

            <Footer />
        </div>
        </>
    );
}
export default Work;