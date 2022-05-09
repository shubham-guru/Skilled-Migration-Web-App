import React, {useEffect} from 'react';
import "./css/Swiper.css";
import ScrollableLine from "./js/ScrollableLine.js";
// import eligibility from "../images/eligibility.jpg";
// import assessment from "../images/assessment.jpg";
// import consultation from "../images/consultation.jpg";
// import signup from "../images/signup.jpg";
// import documentation from "../images/documentation.jpg";
// import fileSubmission from "../images/fileSubmission.jpg";
// import update from "../images/update.jpg";

const Swiper = () => {
  useEffect(()=>{
    ScrollableLine();
  }, [])

  return (
    <>
      <div className="outerBox">
        <div className='innerBoxSwiper'>
        <svg id="mySVG">
        <line x1={100} y1={100} x2={100} y2={4400} style={{stroke: '#000', strokeWidth: 2}} id="triangle" />
        Sorry, your browser does not support inline SVG.
      </svg>
        <div>
        <div className='contain'>
          <h1>#1 <br />Check Eligibility</h1>

          <div className='listDiv'>
              <ul>
                <li>
                Our aim is to undertake a transparent approach and provide authentic guidance in your 
                immigration process.
                </li>

                <li>Our team of consultants critically analyze each case and provide them with a 
                  suitable and personalized one-on-one counselling sessions
                </li>

                <li>
                For an in-depth analysis of your application, use our FREE Assessment tool that 
                will examine the eligibility for the destination and visa category.
                </li>

                <li>
                Click on free-visa-assessment-form and check out your eligibility now
                </li>
              </ul>
        </div>
                {/* <img src={eligibility} alt="eligibility"/> */}

        </div>


          <br/><br/><br/>
        <div className='contain'>
          <h1>#2 <br />Initial Assessment</h1>

          <div className='listDiv'>
              <ul>
              <li>
                A thorough assessment to ascertain which country 
                is best suitable for migration is extremely vital in the beginning of this process.
                </li>

                <li>Each country has its own pre-defined selection criteria based on different skills 
                  and occupation criteria.
                </li>

                <li>
                To check which country suits your needs amidst the ever-changing immigration rules and 
                the pre-defined selection conditions of the selected country, an inspection of your 
                details by an Immigration counselor or expert becomes crucial.
                </li>

                <li>
                An Immigration Consultant will examine whether Canada, Australia, Germany or any 
                other country is a perfect fit for you or not.
                </li>

                <li>
                Try our free online assessment. A comprehensive pre-assessment report will exemplify the best 
                possible destination and visa program applicable to you.
                </li>
              </ul>
              {/* <img src={assessment} alt="assessment"/> */}

        </div>

        </div>


          <br/><br/><br/>
        <div className='contain'>
        <h1>#3 <br /> 1 to 1 consultation</h1>

          <div className='listDiv'>
              <ul>
              <li>
                Our Immigration consultants provide one to one consultation and suggest best suitable 
                options for each candidate.
                </li>

                <li>Our case specific consultation services can be availed through a telephone 
                  conversation or face to face meeting at any of our offices can be the most 
                  cost-effective method of easing your mind with answers.
                </li>

                <li>
                We make sure that every question is answered before you decide to move forward for 
                the Sign-Up process.
                </li>

                <li>
                A detailed process plan with a transparent timeline and cost is described by our 
                Best Immigration Consultant.
                </li>

                <li>
                You can book an appointment to see our consultant by filling the free assessment 
                form.
                </li>
              </ul>
        </div>
        </div>

          <br/><br/><br/>
        <div className='contain'>
        <h1>#4 <br /> Sign up</h1>

          <div className='listDiv'>
              <ul>
                <li>
                Once we are convinced that your case is positive and has possibilities under the 
                immigration for the prospective country, there would be a service Contract Agreement 
                sign-up for an eligible country to initiate the process by allotting you with an 
                adept case manager.
                </li>

                <li>We are professionally committed and adhere to your queries 24 x 7 and keep you 
                  informed about the status of your application at all times.
                </li>
              </ul>
        </div>
        </div>

        <br/><br/><br/>
        <div className='contain'>
        <h1>#5 <br /> Documentation</h1>

          <div className='listDiv'>
              <ul>
                <li>
                Immigration proceedings demand a lot of paperwork, and legal formalities and any 
                improper documentation can lead to delay in your application or worst even sanction 
                rejection.
                </li>

                <li>Hence, proper documentation is an essential step towards immigration to any 
                  country.
                </li>

                <li>We have an separate documentation department that scrutinizes and assesses every 
                  credential thoroughly before it is submitted for analyses to the concerned 
                  immigration authorities.
                </li>

                <li>Our experienced Immigration experts can guide you on secondary documents and 
                  ensure that every document is properly and adequately submitted.
                </li>

                <li>
                Not only does this speed up migration proceedings but give a hassle-free experience.
                </li>
              </ul>
        </div>
        </div>

        <br/><br/><br/>
        <div className='contain'>
        <h1>#6 <br /> File Submission</h1>

          <div className='listDiv'>
              <ul>
                <li>
                File submission is one of the most sensitive stages of the entire procedure.
                </li>

                <li>This stage is of utmost importance, only a professional Immigration consultant 
                  takes charge of the work.
                </li>

                <li>We ensure that the process of file submission is conducted under proper guidance of 
                  experienced professionals only.
                </li>

                <li>After receiving the desired documents, your application is then forwarded to the 
                  specialists ( ICCRC for Canada / MAARA for Australia) to review your entire 
                  application.
                </li>

                <li>A transparent procedure is adopted by our team of Immigration experts to ensure 
                  the client’s awareness and participation in the carried-out process.
                </li>
              </ul>

        </div>
        </div>

        <br/><br/><br/>
        <div className='contain'>
        <h1>#7 <br /> Regular Updates</h1>

          <div className='listDiv'>
              <ul>
                <li>
                After submitting your application, our role doesn’t terminate there.
                </li>

                <li>Our consultants would provide regular updates with respect to your application 
                  and with latest changes happening around the globe.
                </li>

                <li>It is vital for you to be aware of the most recent information and to know if 
                  any change is affecting your application.
                </li>

                <li>Sending regular updates via emails and phone calls to our candidate is part 
                  of our candidate-consultant communication policy.
                </li>

                <li>We understand that candidates get apprehensive when they do not get regular 
                  updates about their application.
                </li>

                <li>Our goal is to support you until you achieve your destination.
                </li>
              </ul>

        </div>
        </div>
        </div>
        {/* <img src={consultation} alt="consultation"/> */}

    
      </div>
      </div>
    </>
  );
}
export default Swiper;