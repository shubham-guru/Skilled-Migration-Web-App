import React, { useState } from "react";
import "./css/Study.css";
import Footer from "./Footer";
import user from "../images/icons/user.png";
import mortarboard from "../images/icons/mortarboard.png";
import work from "../images/icons/work.png";
import language from "../images/icons/language.png";
import heart from "../images/icons/heart.png";
import onlineLearning from "../images/icons/online-learning.png";
import others from "../images/icons/others.png";
import CustomeField from "./CustomeField";
import CustomeSelection from "./CustomeSelection";

const Study = () => {
  const [input, setInput] = useState({
    age: "",
    study: "",
    postStudy: "",
    edu: "",
    outExp: "",
    english: "",
    married: "",
    spouse1: "",
    spouseStudy: "",
    spouseEng: "",
    paidExp: "",
    employment: "",
    read: "",
    toefl: "",
    spouseEdu: "",
    spouseEdu2: "",
    deFactoWrkExp: "",
    isJob: "",
    isLiving: "",
  });
  const [value, setValue] = useState();
  const [showEdu, setShowEdu] = useState(false);
  const [country, setCountry] = useState(false);
  const [exp, setExp] = useState(false);
  const [languagePro, setLanguagePro] = useState(false);
  const [spouse, setSpouse] = useState(false);
  const [deFacto, setDeFacto] = useState(false);
  const [deFactoWrk, setDeFactoWrk] = useState(false);
  const [other, setOther] = useState(false);
  const lang = ["None", "Beginner", "Intermediate", "Advanced", "Expert"];
  const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const relation = [
    "Spouse or Common-Law Partner",
    "Mother or Father",
    "Daughter or Son",
    "Grandmother or Grandfather",
    "Granddaughter or Grandson",
    "Sister or Brother",
    "Niece or Nephew",
    "Aunt or Uncle",
    "Cousin",
    "Distant Relative",
    "Close Friend",
  ];
  const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands",
  ];
  const boolean= ["Yes", "No"];
  const proficiency = ["Very High Proficiency", "High Proficiency", "Moderate Proficiency", "Basic Proficiency"];
  const maritalStatus = ["Unmarried", "Married/De Facto Relationship", "Widowed" ,"Divorced"];
  const education = ["High School","Senior Secondary School","One year Diploma", "Bachelors Degree (three or more years)",
  "Masters Degree or Licensed Professional Degree (two or more years)", "Doctoral Degree (PhD)"];
  const location = ["In Australia", "Outside Australia"];
  const employment = ["Full Time - More than 30hrs/week", "Part Time - Less than 30hrs/week"];
  const jobDuration = ["None or less than a year", "One Year", "Two Years", "Three Years", "Four Years",
  "Five Years or more"];

  const callBackFunction = (childData) =>{
    setValue(childData);
  }
  return (
    <>
      <div class="wrapper">
        <h1 class="title" data-text="Study Abroad">
          Study Abroad
        </h1>
      </div>
      <br />
      <br />

      <div style={{ backgroundColor: "#fff" }}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%", textAlign: "right" }}>
            <h2 className="subHeading">FREE ASSES</h2>
          </div>
          <div style={{ width: "50%", textAlign: "left" }}>
            <h2
              className="subHeading"
              style={{ backgroundColor: "#fff", color: "#000" }}
            >
              SMENT TEST
            </h2>
          </div>
        </div>

        <div className="mainDiv">
          <p>
            <b>Choose Your Country</b>
          </p>
          <form className="countryForm">
            <label onClick={() => setCountry(true)} className="radioLabel">
              <input type="radio" value="Australia" name="country" />
              <span>Australia</span>
            </label>

            <label className="radioLabel">
              <input type="radio" value="Canada" name="country" />
              <span>Canada</span>
            </label>

            <label className="radioLabel">
              <input type="radio" value="UAE" name="country" />
              <span>UAE</span>
            </label>
          </form>
        </div>

        {country ? (
          <div className="mainDiv">
            <form action="#" autoComplete="off" className="detailsForm">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={user} alt="user_icon" width="4%" />
                <p>
                  <b>Your Personal Profile</b>
                </p>
              </div>
              <div className="inputDiv">
                <CustomeField label="First Name" type="text"/>
                <CustomeField label="Last Name" type="text" />
                <CustomeField label="Email Address" type="email" />
                <CustomeField label="Phone no." type="phone" />
                <CustomeField label="Age" type="text" />
                <CustomeSelection
                  label="Nationality"
                  getData={callBackFunction}
                  option={countryList.map((items) => (
                    <option value={items}>{items}</option>
                  ))}
                />
                 <CustomeSelection
                  label="Country of Residence"
                  option={countryList.map((items) => (
                    <option value={items}>{items}</option>
                  ))}
                />
                <CustomeSelection
                  label="Marital Status"
                  option={maritalStatus.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                />
              </div>

              {input.married == "Married/De Facto Relationship" ? (
                <>
                  <CustomeSelection
                   label="Does your spouse/partner have australia work experience ?"
                   option={boolean.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
                  />
                  <CustomeSelection
                   label="Has your spouse/partner studied in australia for 2 or more years ?"
                   option={boolean.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
                  />
                  <CustomeSelection
                   label="Your spouse/partner english proficiency"
                   option={proficiency.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
                  />
                </>
              ) : null}
              <button
                className="button button--pan customeButton"
                onClick={() => setShowEdu(true)}
              >
                <span>NEXT</span>
              </button>
            </form>
          </div>
        ) : null}

        {showEdu ? (
          <div className="mainDiv">
            <form className="detailsForm" onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={mortarboard} alt="user_icon" width="4%" />
                <p>
                  <b>Your Education</b>
                </p>
              </div>

              <div className="inputDiv eduDiv">
              <CustomeSelection
                   label="Have you obtained any post-secondary education or training"
                   option={boolean.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
                  />
              </div>

              {input.postStudy === "Yes" ? (
                <div>
                   <CustomeSelection
                   label="Have you Studied in Australia ?"
                   option={boolean.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
                  />
                  {input.study === "Yes" ? (
                    <div className="inputDiv eduDiv">
                    <CustomeField label="Australian School / University name" type="text"/>
                    <CustomeField label="Field of Study" type="text"/>
                    </div>
                  ) : null}

                  <CustomeSelection
                   label="What is your highest level of education ?"
                   option={education.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
                  />

                  <div className="grayBox">
                    <h6>Current (or most recent) Program of Study:</h6>
                    <br />


                    <CustomeSelection
                   label="Type of Program"
                   option={education.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
                  />
                  <CustomeField label="Field of Study" type="text"/>
                  <CustomeSelection
                   label="Location"
                   option={location.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
                  />
                   <CustomeSelection
                   label="Did you complete this Program ?"
                   option={boolean.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
                  />
                    <button className="button button--pan customeButton">
                      <span>Add more work Education or Training Program</span>
                    </button>
                  </div>
                </div>
              ) : null}

              <button
                className="button button--pan customeButton"
                onClick={() => setExp(true)}
              >
                <span>NEXT</span>
              </button>
            </form>
          </div>
        ) : null}

        {exp ? (
          <div className="mainDiv">
            <form className="detailsForm" onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={work} alt="work_icon" width="4%" />
                <p>
                  <b>Your Work Experience</b>
                </p>
              </div>

              <div>
              <CustomeSelection
                   label=" Have you obtained any paid work experience in the last 10 years ?"
                   option={boolean.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
                  />
              </div>

              {input.paidExp === "Yes" ? (
                <div className="grayBox">
                  <h6>Current (or most recent) Job:</h6>
                  <br />

                  <CustomeField label="Occupation" type="text"/>
                  <CustomeSelection
                   label="Have you obtained any paid work experience in the last 10 years ?"
                   option={employment.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
                  />
                  <CustomeField label="Job Start Year" type="year"/>
                  <CustomeField label="Job End Year" type="year"/>
                  <CustomeSelection
                   label="Job Duration"
                   option={jobDuration.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
                  />
                   <CustomeSelection
                   label="Location"
                   option={location.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
                  />
                  <button className="button button--pan customeButton">
                    <span>Add more work experience</span>
                  </button>

                  <button className="button button--pan customeButton">
                    <span>Next</span>
                  </button>
                </div>
              ) : null}
              <button
                className="button button--pan customeButton"
                onClick={() => setLanguagePro(true)}
              >
                <span>Next</span>
              </button>
            </form>
          </div>
        ) : null}

        {languagePro ? (
          <div className="mainDiv">
            <form className="detailsForm" onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={language} alt="language_icon" width="4%" />
                <p>
                  <b>English Language Proficiency</b>
                </p>
              </div>
              <br />
              <CustomeSelection
                   label="Reading Proficiency"
                   option={lang.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
              />
               <CustomeSelection
                   label="Reading Proficiency"
                   option={lang.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
              />
               <CustomeSelection
                   label="Writing Proficiency"
                   option={lang.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
              />
               <CustomeSelection
                   label="Speaking Proficiency"
                   option={lang.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
              />
                <CustomeSelection
                   label="Listening Proficiency"
                   option={lang.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
              />
                <CustomeSelection
                   label="Have you appeared for the IELTS/TOEFL examination ?"
                   option={boolean.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
              />

              {input.toefl === "Yes" ? (
                  <CustomeSelection
                   label="Overall band score attained"
                   option={number.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
              />
              ) : null}

              <button
                className="button button--pan customeButton"
                onClick={() => setSpouse(true)}
              >
                <span>Next</span>
              </button>
            </form>
          </div>
        ) : null}

        {spouse ? (
          <div className="mainDiv">
            <form className="detailsForm" onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={heart} alt="language_icon" width="4%" />
                <p>
                  <b>Your Spouse/De-Facto Partner's Information</b>
                </p>
              </div>
              <br />
              <CustomeSelection
                   label="Is your spouse or common-law partner coming with you to Australia?"
                   option={boolean.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
              />
              <CustomeField label=" Your spouse or de-facto partner’s age" type="text"/>

              <label className="inputLabel">
                In the last 10 years, how many years of skilled work experience
                INSIDE AUSTRALIA does your spouse have ? *
                <select>
                  <option value="">-- Select one --</option>
                  <option value="none">None or less than a year</option>
                  <option value="1">1 year</option>
                  <option value="2">2 years</option>
                  <option value="3">3 years</option>
                  <option value="4">4 years</option>
                  <option value="5">5 years or more</option>
                </select>
              </label>
              
              <CustomeSelection
                   label="Spouse's Reading Proficiency"
                   option={lang.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
              />
               <CustomeSelection
                   label="Spouse's Writing Proficiency"
                   option={lang.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
              />
               <CustomeSelection
                   label="Spouse's Speaking Proficiency"
                   option={lang.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
              />
               <CustomeSelection
                   label="Spouse's Listening Proficiency"
                   option={lang.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
              />
               <CustomeSelection
                   label="Have your spouse appeared for the IELTS/TOEFL examination ?"
                   option={boolean.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
              />

              {input.toefl === "Yes" ? (
                 <CustomeSelection
                 label="Overall band score attained"
                 option={number.map((item)=> (
                  <option value={item}>{item}</option>
                 ))}
                />
              ) : null}

              <button
                className="button button--pan customeButton"
                onClick={() => setDeFacto(true)}
              >
                <span>Next</span>
              </button>
            </form>
          </div>
        ) : null}

        {deFacto ? (
          <div className="mainDiv">
            <form className="detailsForm" onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={onlineLearning} alt="language_icon" width="4%" />
                <p>
                  <b>Your Spouse/De-Facto Partner's Education And Training</b>
                </p>
              </div>
              <br />
              <CustomeSelection
                   label="Has your spouse or de-facto partner obtained any post-secondary
                   education or training ?"
                   option={boolean.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
              />
              {input.spouseEdu === "Yes" ? (
                <>
              <CustomeSelection
                   label="Has your spouse or de-facto partner studied in Australia ?"
                   option={boolean.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
              />

                  {input.spouseEdu2 === "Yes" ? (
                    <>
                   <CustomeField label="Australian School/University" type="text"/>
                    </>
                  ) : null}

                  <CustomeSelection
                   label="What is your spouse's highest level of education ?"
                   option={education.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
                  />

                  <div className="grayBox">
                    <h6>Current (or most recent) Program of Study:</h6>
                    <br />

                    <CustomeSelection
                   label="Type of Program"
                   option={location.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
                  />
                  <CustomeField label="Field of Study" type="text"/>
                  <CustomeSelection
                   label="Location"
                   option={location.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
                  />
                   <CustomeSelection
                   label="Did you complete this Program ?"
                   option={boolean.map((item)=> (
                    <option value={item}>{item}</option>
                   ))}
                  />

                    <button className="button button--pan customeButton">
                      <span>Add more work Education or Training Program</span>
                    </button>
                  </div>
                </>
              ) : null}
              <button
                className="button button--pan customeButton"
                onClick={() => setDeFactoWrk(true)}
              >
                <span>Next</span>
              </button>
            </form>
          </div>
        ) : null}

        {deFactoWrk ? (
          <div className="mainDiv">
            <form className="detailsForm" onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={work} alt="work_icon" width="4%" />
                <p>
                  <b>Your Spouse/De-Facto Partner's Work Experience</b>
                </p>
              </div>

              <div>
                <label className="inputLabel">
                  Does your spouse or De-Facto partner have any paid work
                  experience in the last 10 years ? *
                  <select
                    onChange={(e) =>
                      setInput({ ...input, deFactoWrkExp: e.target.value })
                    }
                  >
                    <option value="">-- Select one --</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </label>
              </div>

              {input.deFactoWrkExp === "Yes" ? (
                <div className="grayBox">
                  <h6>Current (or most recent) Job:</h6>
                  <br />

                  <label className="inputLabel">
                    Occupation *
                    <input type="text" placeholder="Occupation" required />
                  </label>

                  <label className="inputLabel">
                    Employment type *
                    <select
                      onChange={(e) =>
                        setInput({ ...input, employment: e.target.value })
                      }
                    >
                      <option value="">-- Select one --</option>
                      <option value="fullTime">
                        Full Time - More than 30hrs/week
                      </option>
                      <option value="partTime">
                        Part Time - Less than 30hrs/week
                      </option>
                    </select>
                  </label>

                  <label className="inputLabel">
                    Job Start Year *
                    <input type="year" placeholder="Job Start Year" required />
                  </label>

                  <label className="inputLabel">
                    Job End Year *
                    <input type="year" placeholder="Job End Year" required />
                  </label>

                  <label className="inputLabel">
                    Job Duration *
                    <select
                      onChange={(e) =>
                        setInput({ ...input, employment: e.target.value })
                      }
                    >
                      <option value="">-- Select one --</option>
                      <option value="none">None or less than a year</option>
                      <option value="one">One Year</option>
                      <option value="two">Two Years</option>
                      <option value="three">Three Years</option>
                      <option value="four">Four Years</option>
                      <option value="five">Five Years or more</option>
                    </select>
                  </label>

                  <label className="inputLabel">
                    Location *
                    <select
                      onChange={(e) =>
                        setInput({ ...input, employment: e.target.value })
                      }
                    >
                      <option value="">-- Select one --</option>
                      <option value="in">In Australia</option>
                      <option value="out">Outside Australia</option>
                    </select>
                  </label>

                  <button className="button button--pan customeButton">
                    <span>Add more work experience</span>
                  </button>
                </div>
              ) : null}
              <button
                className="button button--pan customeButton"
                onClick={() => setOther(true)}
              >
                <span>Next</span>
              </button>
            </form>
          </div>
        ) : null}

        {other ? (
          <div className="mainDiv">
            <form className="detailsForm" onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={others} alt="others_icon" width="4%" />
                <p>
                  <b>Others</b>
                </p>
              </div>
              <label className="inputLabel">
                Please select all statements that apply to you or any of your
                accompanying family members:
              </label>

              <div>
                <label className="inputLabel">
                  In the last 10 years, how many years of skilled work
                  experience OUTSIDE AUSTRALIA do you have ? *
                  <select>
                    <option value="">-- Select one --</option>
                    <option value="none">None or less than a year</option>
                    <option value="one">1 - 2 years</option>
                    <option value="three">3 years or more</option>
                  </select>
                </label>

                <label className="inputLabel">
                  In the last 10 years, how many years of skilled work
                  experience INSIDE AUSTRALIA do you have ? *
                  <select>
                    <option value="">-- Select one --</option>
                    <option value="none">None or less than a year</option>
                    <option value="one">1 year</option>
                    <option value="two">2 year</option>
                    <option value="three">3 year</option>
                    <option value="four">4 year</option>
                    <option value="five">5 years or more</option>
                  </select>
                </label>

                <label className="inputLabel">
                  Do you have a certificate of qualification from a Australian
                  provincial, territorial, or federal body ? *
                  <select>
                    <option value="">-- Select one --</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </label>

                <label className="inputLabel">
                  Do you have a certificate of nomination from a Australian
                  province or territory ? *
                  <select>
                    <option value="">-- Select one --</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </label>

                <label className="inputLabel">
                  Do you have a valid job offer from a Australian employer ? *
                  <select
                    onChange={(e) =>
                      setInput({ ...input, isJob: e.target.value })
                    }
                  >
                    <option value="">-- Select one --</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </label>

                {input.isJob === "Yes" ? (
                  <label className="inputLabel">
                    Is the job offer in a senior managerial role ? *
                    <select>
                      <option value="">-- Select one --</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </label>
                ) : null}

                <label className="inputLabel">
                  Do you or your Spouse/De-Facto Partner have a brother or
                  sister living in Australia who is a citizen or permanent
                  resident ? *
                  <select>
                    <option value="">-- Select one --</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </label>

                <label className="inputLabel">
                  Do you or your Spouse/De-Facto Partner have any family members
                  and or extended relatives living in Australia ? *
                  <select
                    onChange={(e) =>
                      setInput({ ...input, isLiving: e.target.value })
                    }
                  >
                    <option value="">-- Select one --</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </label>

                {input.isLiving === "Yes" ? (
                  <div className="grayBox">
                    <h6>This person is your:</h6>
                    <br />

                    <label className="inputLabel">
                      Relationship *
                      <select>
                        <option value="">-- Select one --</option>
                        {relation.map((item) => (
                          <option value={item}>{item}</option>
                        ))}
                      </select>
                    </label>

                    <label className="inputLabel">
                      Residency Status *
                      <select>
                        <option value="">-- Select one --</option>
                        <option value="citizen">Is Citizen</option>
                        <option value="permanent-resident">
                          Is Permanent Resident
                        </option>
                        <option value="work-permit">Is on Work Permit</option>
                        <option value="study-permit">Is on Study Permit</option>
                      </select>
                    </label>

                    <label className="inputLabel">
                      Province of Australia reside in *
                      <select>
                        <option value="">-- Select one --</option>
                        <option value="AB">Alberta</option>
                        <option value="BC">British Columbia</option>
                        <option value="MB">Manitoba</option>
                        <option value="NB">New Brunswick</option>
                        <option value="NL">Newfoundland and Labrador</option>
                        <option value="NT">Northwest Territories</option>
                        <option value="NS">Nova Scotia</option>
                        <option value="NU">Nunavut</option>
                        <option value="ON">Ontario</option>
                        <option value="PE">Prince Edward Island</option>
                        <option value="QC">Quebec</option>
                        <option value="SK">Saskatchewan</option>
                        <option value="YT">Yukon</option>
                      </select>
                    </label>
                  </div>
                ) : null}
              </div>

              <label className="inputLabel">
                Do you or your Spouse/De-Facto Partner or dependent children
                have a criminal record ? *
                <select>
                  <option value="">-- Select one --</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </label>

              <label className="inputLabel">
                Do you or your Spouse/De-Facto Partner or dependent children
                have a serious medical condition ? *
                <select>
                  <option value="">-- Select one --</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </label>

              <label className="inputLabel">
                Questions and comments
                <textarea
                  placeholder="Questions and comments"
                  style={{ border: "solid" }}
                  required
                />
              </label>
              <button className="button button--pan customeButton">
                <span>Submit</span>
              </button>
            </form>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default Study;
