import React from 'react';
import './css/job.css';
import { Link } from "react-router-dom";

const Job = () => {
  return (
    <div className='jobDiv'>
        <div className='upperJobDiv'>
            <h2>Panel Beater</h2>
            <span>at XA Group, </span>
            <span>Dubai, UAE - 00000</span>
            <br/>
            <div className='userInfo'>
            <table width="100%" border="1px" cellSpacing="0px">
                <tr>
                    <th>Start Date</th>
                    <th>Expiry Date</th>
                    <th>Salary</th>
                    <th>Posted on</th>
                    <th>Experience</th>
                    <th>Skills</th>
                    <th>Telecommute</th>
                    <th>Sponsor visa</th>
                </tr>
                <tr>
                    <td>Immediate</td>
                    <td>17 May, 2022</td>
                    <td>USD 37900 Annual</td>
                    <td>18 Jan, 2022</td>
                    <td>1 year or above</td>
                    <td>Addition,Documentation,IT,Eligibility</td>
                    <td>No</td>
                    <td>No</td>
                </tr>
            </table>
            </div>
            <Link to="/" className="button button--pan">
              <span>Add to wishlist</span>
            </Link>
            <Link to="/" className="button button--pan">
              <span>All jobs</span>
            </Link>
        </div>
       
       <div className='wrapDiv'>
       <div className='middleJobDiv'>
            <h4>Description :</h4>
            <p>Location: Edinburgh</p>
            <p>Salary: £300 - £300 per day</p>
            <p>Reference: J23187</p>
            <p>Contract Type: Temporary</p>
            <p>Working Hours: Full-time</p>
            <p>Created: 4th April 2022</p>
            <p>Closing: 2nd May 2022</p>
            <p>
            Contract Scotland are delighted to be working with a large Tier 1 contractor 
            on their newest and biggest job in Scotland and they are looking to appoint 
            a freelance Health & Safety Advisor to join the team starting asap until 
            Christmas.<br/>
            The job consists of a new road junction on the A1 next to Queen Margaret 
            University on behalf of East Lothian Council and Transport Scotland. With 
            this job consisting of key works on a busy motorway, the contractor is 
            tied down to a strict deadline which is why this role is requiring someone 
            immediately.
            </p>
            <br/>
            <h4>What does the ideal candidate look like?</h4>
            <ul>
                <li>A hands on approach to Health & Safety</li>
                <li>Civil engineering background, ideally with roads experience</li>
                <li>Hardworking attitude</li>
                <li>Commitment to work until Christmas</li>
            </ul>
            <br/>

            <h4>What’s required?</h4>
            <ul>
                <li>A valid CSCS card</li>
                <li>Availability to start ASAP</li>
                <li>Capability of slotting into a busy site</li>
            </ul>

            <p>
            If you’re interested, please submit your CV to Kirstin Marshall by clicking 
            Apply Now, or give us a call on 01786 446651 and quote the job J23187. <br/>
            Legal Information: <br/>
            Contract Scotland offers both the services of an employment agency for 
            permanent work and an employment business for temporary work.
            We can only deal with applications from Candidates who are eligible to 
            work in the UK and are current UK residents.
            We are committed to equal opportunities and diversity for our employees, 
            temporary workers and work seekers. Individuals are only assessed on their 
            individual merits and suitability to a position irrespective of race, 
            gender, disability, age, faith or sexual orientation
            </p>
            <br/>

            <h4>Responsibilities:</h4>
            <p>Please refer the Job description for details</p>

            <hr color='#eee' style={{marginTop: "10px"}}/>

       </div>

       <div className='lastJobDiv' align="center">
           <h5>REQUIREMENT SUMMARY</h5>
           <hr color='#eee' style={{marginTop: "10px"}}/>

        <div>
           <h5>Industry:</h5>
           <p>Other Industry</p>

           <h5>Functional area of job:</h5>
           <p>HR / Administration / IR</p>

           <h5>Domain:</h5>
           <p>Other</p>

           <h5>Qualifications:</h5>
           <p>Graduate</p>

           <h5>English Proficiency:</h5>
           <p>Proficient</p>

           <h5>Number of posts:</h5>
           <p>1</p>

           <h5>Address of job:</h5>
           <p>Edinburgh, United Kingdom</p>
       </div>
       </div>
       </div>
    </div>
  )
}

export default Job;