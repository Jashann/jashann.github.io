import React from 'react'
import { Link } from 'react-router-dom'
import { URL_ROUTES } from '../assets/helpers/URL_ROUTES.routes'
import ProfileImage from '../components/profileImage.component';

export default function AboutPage() {
  return (
    <div className='about'>
        <div className="container my-5">
            <ProfileImage />
            <p className='mt-5 text-justify'>
              I am Jashanjot. I am a full-stack Web Developer and Software Developer, currently living in Winnipeg, Manitoba. I'm doing <b className='text-uppercase'> Bachelor of Science in Computer Science </b> from <b className='text-uppercase'> University of Manitoba </b>, and my primary focus and inspiration for my studies is Web Development, data analysis & building scalable apps. I am both self-driven and motivated. I am constantly experimenting with new technologies and techniques. I am very passionate about Web & Software development, and strive to better myself as a developer, and the development community as a whole.
            </p>
            <p>
              I have been studying web development extensively  and I develop in both C# and PHP, though I primarily use C#. I am experienced in both front and back-end development, and I am proficient in HTML, CSS, SASS, React, JavaScript, NodeJS, Django, jQuery, AJAX, and SQL/MySQL/PostgreSQL. I am also proficient in many non-web-based languages, including but not limited to Java, C, C++, Python. I have worked on group as well as personal projects, and have used the different languages to create useful tools for data processing, visualizing data, as well as general purpose apps.
            </p>
            <p>
              I am always working on some projects to keep learning something new (so my brain does not rust 😁). Ahead over to <Link className='text-link' to={URL_ROUTES.projects}><b>HERE</b></Link>, to see what I am currently working on. 
            </p>
            <p>
              I am open to new projects and the opportunities, <Link className='text-link' to={URL_ROUTES.contact}><b>CONTACT ME</b></Link> if I am good fit for your ideas, and thank you for coming here :)
            </p>
        </div>
    </div>
  )
}
