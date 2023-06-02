import React from 'react'
import FunFacts from '../components/funFacts.component'
import ProfileImage from '../components/profileImage.component';
import Work from '../components/work.component';


export default function AboutPage() {
  return (
    <div className='about'>
        <div className="container my-5">
            <ProfileImage />

            <div className='mt-5 text-justify'>
                <p className="py-1">
                    I am Jashanjot. I am an aspiring Software Engineering, currently living in Canada. I'm doing a  <u>Bachelor of Science [Honours - Computer Science]</u>  at the <u>University of Manitoba</u>.
                </p>

                <p className="py-1">
                    My primary focus and inspiration for my studies is <u>building scalable software</u>.
                </p>

                <p className="py-1">
                    I am proficient in: <u>Java, C++, C, C#, SQL, and Python</u>.
                </p>

                <p className="py-1">
                    I am experienced in both <u>front and back-end development</u>, and worked with <u>JavaScript, TypeScript, NodeJS, Django, React, VueJs, jQuery, AJAX, and SQL</u>.
                </p>

                <p className="py-1">
                    I have worked with tools: <u>Docker, Git, AWS, Jetbrains workspace</u>.
                </p>

                <p className="py-1">
                    I regularly take a part in <u>competitive programming contests</u> to meet new like-minded people, practice and improve my knowledge of <u>Data Structures and Algorithms</u>.  I have created programs for data processing and visualizing data, as well as general-purpose apps.
                    <div className="py-2"></div>
                </p>
            </div>

            <Work/>
            <FunFacts />
        </div>
    </div>
  )
}
