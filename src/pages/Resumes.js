import React, { useState, useEffect } from "react";
import axios from 'axios';
import TrackVisibility from "react-on-screen";
import Sectiontitle from "../components/Sectiontitle";
import Smalltitle from '../components/Smalltitle';
import Layout from "../components/Layout";
import Progress from "../components/Progress";
import Resume from "../components/Resume";

function Resumes(){
  const [skills, setSkills] = useState([]);
  const [workingExperience, setWorkingExperience] = useState([]);
  const [educationExperience, setEducationExperience] = useState([]);
  const [information, setInformation] = useState([]);

  useEffect(() =>{
    axios.get('/api/experience')
      .then(response =>{
        setWorkingExperience(response.data.workingExperience);
        setEducationExperience(response.data.educationExperience);
      })
      axios.get('/api/information')
      .then(response =>{
        setInformation(response.data)
      })
  }, [])

  return (
    <Layout>
        
      <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
            <Sectiontitle title="Resume" />
          <Smalltitle title="Working Experience" icon="briefcase" />
          <div className="mi-resume-wrapper">
            {workingExperience.map(workingExp => {

              return (    <Resume key={workingExp.id} resumeData={workingExp} /> )
           
              })}
          </div>
          <div className="mt-30"></div>
          <Smalltitle title="Educational Qualifications" icon="book" />
          <div className="mi-resume-wrapper">
            {educationExperience.map(educatonExp => (
              <Resume key={educatonExp.id} resumeData={educatonExp}/>
            ))}
          </div>
          <div style={{paddingTop: '5%'}}> 
          {console.log(information)}
           <a href={information.cvfile} className="mi-button">Download Resume</a>
          </div>
      
        </div>
        
      </div>
    </Layout>
  );
}

export default Resumes;
