import React from 'react'
import { Link } from 'react-router-dom'
import { URL_ROUTES } from '../assets/helpers/URL_ROUTES.routes'
import FunFacts from '../components/funFacts.component'
import ProfileImage from '../components/profileImage.component';
import Work from '../components/work.component';


export default function AboutPage() {
  return (
    <div className='about'>
        <div className="container my-5">
            <ProfileImage />
              <p className='mt-5 text-justify' >I am Jashanjot. I am an aspiring Software Engineering, currently living in Canada. I'm doing a  <u>Bachelor of Science [Honours - Computer Science]</u>  at the <u>University of Manitoba</u>.
              <br /> <br />
              My primary focus and inspiration for my studies is <u>building scalable software</u>.
              <br /> <br />
              I am experienced in both <u>front and back-end development</u>, and I am proficient in <u>React, JavaScript, NodeJS, Django, jQuery, AJAX, and SQL</u>. 
              <br /> <br />
              I am proficient in many non-web-based languages, including <u>Java, C, C++, and Python</u>.
              <br /> <br />
              I regularly take a part in <u>competitive programming contests</u> to meet new like-minded people and improve my knowledge of <u>Data Structures and Algorithms</u>.  I have created programs for data processing and visualizing data, as well as general-purpose apps.
               <br /> <br />
              I am open to new opportunities for <u>Summer 2023</u>
            </p>
      
            <Work/>

            <FunFacts />

        </div>
    </div>
  )
}
