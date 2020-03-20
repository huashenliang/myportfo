import React, { useState, useEffect } from "react";
import axios from 'axios';
import Slider from "react-slick";
import FsLightbox from "fslightbox-react";
import * as Icon from "react-feather";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import Service from '../components/Service';
import Testimonial from '../components/Testimonial';
import Progress from "../components/Progress";
import TrackVisibility from "react-on-screen";

function About(){
  const [skills, setSkills] = useState([]);
  const [toggler, setToggler] = useState(false);
  const [information, setInformation] = useState("");
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };

  const handleToggler = (event) => {
    setToggler({
      toggler: event
    })
  }

  useEffect(() =>{
    axios.get('/api/information')
      .then(response =>{
        setInformation(response.data)
      })
      axios.get('/api/skills')
      .then(response =>{
        setSkills(response.data);
      })
    axios.get('/api/reviews')
      .then(response =>{
        setReviews(response.data)
      })
  }, [])

  return (
    <Layout>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="About Me" />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-about-image">
                <img
                  src={information.aboutImage}
                  alt="about"
                  onClick={() => handleToggler(!toggler)}
                />
                <span className="mi-about-image-icon">
                  <Icon.ZoomIn />
                </span>
                <FsLightbox
                  toggler={toggler}
                  sources={[information.aboutImageLg]}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-about-content">
                <h3>
                  I am <span className="color-theme">{information.name}</span>
                </h3>
                <p>
                  I am a Junior web developer who understand CI/CD processes and concepts. Experienced various DevOps tools.
                </p>
                <ul>
                  {!information.name ? null : <li>
                    <b>Full Name</b> {information.name}
                  </li>}
                  {!information.phone ? null : <li>
                    <b>Phone</b> {information.phone}
                  </li>}
                  {!information.location ? null : <li>
                    <b>Location</b> {information.location}
                  </li>}
                  {!information.nationality ? null : <li>
                    <b>Nationality</b> {information.nationality}
                  </li>}
                  {!information.language ? null : <li>
                    <b>Languages</b> {information.language}
                  </li>}
                  {!information.email ? null : <li>
                    <b>Email</b> {information.email}
                  </li>}
            
                  {!information.freelanceStatus ? null : <li>
                    <b>Freelance</b> {information.freelanceStatus}
                  </li>}
                </ul>
                <a href={information.cvfile} className="mi-button">Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>

     
     
      <div className="mi-skills-area mi-section mi-padding-top">
        <div className="container" style={{paddingBottom:100}}>
          <Sectiontitle title="My Skills" />
          <div className="mi-skills">
            <h4 style={{padding:30}}>DevOps Tools</h4>
            {console.log(skills.devops)}
            <div className="row mt-30-reverse">
          
             {skills.devops ?
              skills.devops.map(skill => (
                <TrackVisibility once className="col-lg-6 mt-30" key={skill.title}>
                  <Progress title={skill.title} percentage={skill.value} />
                </TrackVisibility>
              ))
              :null
              } 
   
          </div>

          <h4 style={{padding:30}}>Web Development</h4>
            {console.log(skills.web)}
            <div className="row mt-30-reverse">
          
             {skills.web ?
              skills.web.map(skill => (
                <TrackVisibility once className="col-lg-6 mt-30" key={skill.title}>
                  <Progress title={skill.title} percentage={skill.value} />
                </TrackVisibility>
              ))
              :null
              } 
          </div>

          <h4 style={{padding:30}}>App Development</h4>
            {console.log(skills.app)}
            <div className="row mt-30-reverse">
          
             {skills.app ?
              skills.app.map(skill => (
                <TrackVisibility once className="col-lg-6 mt-30" key={skill.title}>
                  <Progress title={skill.title} percentage={skill.value} />
                </TrackVisibility>
              ))
              :null
              } 
          </div>

        </div>
      </div>
      </div>
      {/* <div className="mi-service-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Services" />
          <div className="mi-service-wrapper">
            <div className="row mt-30-reverse">
              {services.map(service => (
                <div className="col-lg-4 col-md-6 col-12 mt-30" key={service.title}>
                  <Service content={service}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="mi-review-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Reviews" />
          <div className="row justify-content-center">
            <div className="col-12">
              <Slider className="mi-testimonial-slider" {...sliderSettings}>
                {reviews.map(review =>(
                  <Testimonial key={review.id} content={review}/>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div> */}
    </Layout>
  );
}

export default About;
