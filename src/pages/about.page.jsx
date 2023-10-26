import React from 'react'
import FunFacts from '../components/funFacts.component'
import ProfileImage from '../components/profileImage.component';
import Work from '../components/work.component';


export default function AboutPage() {
  return (
    <div className="about">
      <div className="container my-5">
        <ProfileImage />
        <div className="mt-5 text-justify">
          <p className="py-1">
            I am currently enrolled in the Bachelor of Science program at the
            University of Manitoba, specializing in Computer Science (Honours).
            My primary focus is on building scalable software.
          </p>

          <p className="py-1">
            I am proficient in Java, C++, C, C#, SQL, and Python. I have
            experience in both front and back-end development, utilizing
            JavaScript, TypeScript, NodeJS, Django, React, VueJs, jQuery, AJAX,
            and SQL. I am familiar with tools such as Docker, Git, AWS, and
            JetBrains workspace.
          </p>

          <p className="py-1">
            I regularly participate in competitive programming contests to
            network with like-minded individuals and enhance my knowledge of
            Data Structures and Algorithms. My portfolio includes programs for
            data processing and visualization as well as general-purpose
            applications.
            <div className="py-2"></div>
          </p>
        </div>

        <Work />
        <FunFacts />
      </div>
    </div>
  );
}
