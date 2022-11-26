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
            <p className='mt-5 text-justify' >I am Jashanjot. I am an aspiring Software Engineering, currently living in Winnipeg, Canada. I'm doing a  <b>Bachelor of Science [Honours - Computer Science]</b>  at the <b>University of Manitoba</b>.
            <br /> <br />
            My primary focus and inspiration for my studies are building scalable software which is used by millions of people to improve their lives or businesses to solve internal problems and improve their efficiency. I am constantly experimenting with new technologies and techniques. I am very passionate about Software development and engineering and strive to better myself as an engineer, and the development community as a whole.
            I have explored web development extensively.
            <br /> <br />
            I am experienced in both <b>front and back-end development</b> , and I am proficient in <b>React, JavaScript, NodeJS, Django, jQuery, AJAX, and SQL</b> . 
            <br /> <br />
            I am proficient in many non-web-based languages, including <b>Java, C, C++, and Python</b> . I usually practice LeetCode to get better at utilizing different <b>Data Structures and Algorithms</b> . I have worked on the group as well as personal projects. I have used different languages to create valuable tools for data processing and visualizing data, as well as general-purpose apps.
            </p>
              <p>I am always working on some projects to keep learning something new (so my brain does not rust 😁). Ahead over to <Link className='text-link' to={URL_ROUTES.projects}><b>HERE</b></Link>, to see what I am currently working on. 
              </p>
              <p>
                I am open to new projects and the opportunities, <Link className='text-link' to={URL_ROUTES.contact}><b>CONTACT ME</b></Link> if I am good fit for your ideas, and thank you for coming here :)
            </p>

        
            <Work/>

            <FunFacts />

        </div>
    </div>
  )
}
