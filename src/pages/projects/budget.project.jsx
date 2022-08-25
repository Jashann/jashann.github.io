import React from 'react'
import { Link } from 'react-router-dom'
import { URL_ROUTES } from '../../assets/helpers/URL_ROUTES.routes'
import ProjectHeader from '../../components/projectHeader.component'
import Image1 from "./../../assets/img/projects/budget-it/1.png";

export default function ProjectBudgetIt() {
  return (
    <div className='project-container container my-5'>
      <ProjectHeader learnMore={URL_ROUTES.projects_budget_it} />
      
      <div className='project-detail mt-5'>
        
        <h4>Project Detail</h4>
        
        <p>As this project is still in progress, this is how we drew the idea. It might look overwhelming at first look (Click on diagram to zoom in), but it visualizes simple idea.</p>
        
        <a target="_blank" href={Image1} className="image-container" rel="noreferrer">
          <img className='img-fluid my-5' src={Image1} alt="Diagram" />
        </a>

        <ol>
          <li>
            <b>Authentication System</b>: A system where users could create a new account using email or/and bank account, or sign in to their existing accounts.
          </li>

          <li>
            <b>Two Options</b>: Users have option if they want to connect their account to bank account, the program would automatically take the transactions data and record it, second option is where users don't connect their bank account rather enter the data manually.
          </li>

          <li>
            <b>Private Cloud Space</b>:  All the users have access only to their data.
          </li>

          <li>
            <b>Different Categories</b>: All the record data will be categorized into different categories depending on the nature of transaction (One-time, Recurring, Grocery...).
          </li>

          <li>
            <b>Collaboration (Experimental)</b>:  If we have the resources to provide the ability to the users to share their financial data to other users, so they could also contribute to it. This feature will be useful for couples, and people who share their finances. 
          </li>

          <li>
            <b>Visualization</b>: All the recorded data will be visualized into graph forms, comparing to other months income & expenses. Showing what category takes most part of money, and what contributes most to the income.
          </li>

          <li>
            <b>Savable Option</b>: If user feels like he should not have spent money on something, he could check it as a savable expense, so at the end of month he has an idea about what amount he could have saved.
          </li>

          <li>
            <b>Statistics | AI (Experimental)</b>: We will try to use recorded data of income and expenses to predict future income and expenses.
          </li>

          <li>
            <b>Export Options</b>: All the recorded data and visualization in forms of graphs and charts could be exported into PDF and EXCEL file so it's easier to share data, and users could use it for future reference.
          </li>

        </ol>

        <br /> 
        <p>Feel free to <Link to={URL_ROUTES.contact}><b>REACH ME</b></Link> if you have ideas to collaborate on new projects or have any question and/or suggestions about my current projects. </p>
      </div>
    
    </div>
  )
}
