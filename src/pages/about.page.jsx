import React from 'react'
import FunFacts from '../components/funFacts.component'
import ProfileImage from '../components/profileImage.component';
import Work from '../components/work.component';
import Contact from "../components/contact.component";


export default function AboutPage() {
  return (
    <div className="about">
      <div className="container mt-5">
        {/*<ProfileImage />*/}
        <div className="mt-5 text-justify">
          <p className="py-1">
            I am currently enrolled in the Bachelor of Science program at the
            University of Manitoba, specializing in Computer Science (Honours).
            My primary focus is on building scalable software.
          </p>

          <p className="py-1">
            I am proficient in <span className="font-aladin">Java, C++, C, C#, SQL, and Python</span>. I have
            experience in both <span className="font-aladin">front and back-end development</span>, utilizing
            <span className="font-aladin"> JavaScript, TypeScript, NodeJS, Django, React, VueJs, jQuery, AJAX,
            and SQL</span>. I am familiar with tools such as <span className="font-aladin">Docker, Git, AWS, and
            JetBrains workspace</span> .
          </p>

          <p className="py-1">
            I regularly participate in <span className="font-aladin">competitive programming</span> contests to
            network with like-minded individuals and enhance my knowledge of
            Data Structures and Algorithms. My portfolio includes programs for
            <span className="font-aladin"> data processing and visualization</span>
             as well as general-purpose applications.
            <div className="py-2"></div>
          </p>
        </div>

        <Work />
        <Contact />
        {/*<FunFacts />*/}
      </div>
    </div>
  );
}
