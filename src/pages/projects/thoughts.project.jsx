import React from 'react'
import { URL_ROUTES } from '../../assets/helpers/URL_ROUTES.routes'
import ProjectHeader from '../../components/projectHeader.component'
import Image1 from "./../../assets/img/projects/thoughts-sharing/1.png";
import Image2 from "./../../assets/img/projects/thoughts-sharing/2.png";
import Image3 from "./../../assets/img/projects/thoughts-sharing/3.png";

import {Link} from "react-router-dom";


export default function ProjectThoughts() {
  return (
    <div className='project-container container my-5'>
      <ProjectHeader learnMore={URL_ROUTES.projects_thoughts} />
      
      <div className='project-detail mt-5'>
        
        <h4>Project Detail</h4>
        
        <a target="_blank" href={Image1} className="image-container" rel="noreferrer">
            <img className='img-fluid my-5' src={Image1} alt="Diagram" style={ {maxWidth: "500px"} } />
        </a>
        
        <p>
            1. <b>Authentication System</b>: Django (Backend framework) takes care of registering new users, and connecting with database (SQL) to check if the user is already registered. JavaScript handles frontend and shows the messages like the one shown above " 'Jashangill' Is Not Available ". 
        </p>


        <a target="_blank" href={Image2} className="image-container" rel="noreferrer">
            <img className='img-fluid my-5' src={Image2} alt="Diagram" style={ {maxWidth: "800px"} } />
        </a>
       
       <p>
        2. <b>Creating Resources</b>: A user could use HTML rich text editor to add all the information dynamically, even images could be inserted in an article. All such data is stored in SQL database, whereas images are uploaded to AWS (yeah I need to pay for it 😣).
       </p>


       <a target="_blank" href={Image3} className="image-container" rel="noreferrer">
            <img className='img-fluid my-5' src={Image3} alt="Diagram" style={ {maxWidth: "1000px"} } />
        </a>

        <p>
            3. <b>Personalized Dashboard</b>: Every user gets a personalized dashboard where he could see information when he joined, what articles he has created, or commented on or marked as his favorites.
            Users have the ability to look at the profiles of other users as all the profiles are public by default.
        </p>

        <p>
            4. <b>CRUD</b>: All the things are editable (profile picture, article information, comments a user has added on others' profile) just click on yellow edit button (shown above).
        </p>

        <p>
            5. <b>Security</b>: All the confidential information stays in a secured, the production version is therefore not public. 
        </p>

        <p>
            6. <b>Bug-free (Hopefully)</b>: All the bugs that have been reported and found has been fixed. Such as no user could create multiple accounts or pass multiple accounts, not upload infinite number of images that server can't handle.
        </p>

        <br />
        <p>Feel free to <Link to={URL_ROUTES.contact}><b>REACH ME</b></Link> if you have ideas to collaborate on new projects or have any question and/or suggestions about my current projects. </p>

      </div>
    
    </div>
  )
}
