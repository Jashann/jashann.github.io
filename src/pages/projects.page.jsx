import React, { useState } from 'react'
import { CATEGORIES, PROJECTS } from '../assets/helpers/PROJECTS.data';
import {Link} from "react-router-dom";

export default function ProjectPage() {


  const [userInput, setUserInput] = useState('')
  const [isGroup, setIsGroup] = useState(false)
  const [isPersonal, setIsPersonal] = useState(false)
  const [isWeb, setIsWeb] = useState(false)
  const [isData, setIsData] = useState(false)
  const [displayAll, setDisplayAll] = useState(false)

  function clearHandler() {
    if (isGroup) setIsGroup(false)
    if (isPersonal) setIsPersonal(false)
    if (isWeb) setIsWeb(false)
    if (isData) setIsData(false)
  }

  let filteredProjects = PROJECTS

  // Filter by user input
  if (userInput.length > 0) {
    filteredProjects = filteredProjects.filter(
      (project) =>
        project.title.toLowerCase().includes(userInput.toLowerCase()) ||
        project.tools.toLowerCase().includes(userInput.toLowerCase())
    )
  }

  if (isGroup || isPersonal || isWeb || isData) {
    filteredProjects = filteredProjects.filter((project) => {
      if (isGroup) if (!project.tags.includes(CATEGORIES.group)) return false

      if (isPersonal)
        if (!project.tags.includes(CATEGORIES.personal)) return false

      if (isWeb) if (!project.tags.includes(CATEGORIES.web)) return false

      if (isData) if (!project.tags.includes(CATEGORIES.data)) return false

      return true
    })
  }

  return (
    <div className="projects my-5">
      <div className="container">
        <h1 className="text-center mt-5 mb-5">Projects</h1>
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Search by name or skills (react, django)..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />

        <div className="row">
          <div className="my-5 col-12 col-md-3">
            <fieldset className="form-group">
              <legend>Filter By</legend>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  onChange={(e) => setIsGroup(!isGroup)}
                  checked={isGroup}
                  id="checkboxGroup"
                />
                <label className="form-check-label" htmlFor="checkboxGroup">
                  Group Projects
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  onChange={(e) => setIsPersonal(!isPersonal)}
                  checked={isPersonal}
                  id="checkboxPersonal"
                />
                <label className="form-check-label" htmlFor="checkboxPersonal">
                  Personal Projects
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  onChange={(e) => setIsData(!isData)}
                  checked={isData}
                  id="checkboxData"
                />
                <label className="form-check-label" htmlFor="checkboxData">
                  Data Structures & Algorithms
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={(e) => setIsWeb(!isWeb)}
                  checked={isWeb}
                  value=""
                  id="checkboxWeb"
                />
                <label className="form-check-label" htmlFor="checkboxWeb">
                  Web Development
                </label>
              </div>

              <button onClick={clearHandler} className="project-btn">
                Clear{' '}
                <ion-icon class="ms-1" name="close-circle-outline"></ion-icon>{' '}
              </button>
            </fieldset>
          </div>

          <div className="my-5 col-12 col-md-9">
            {filteredProjects.map((project, index) =>
              index <= 2 || displayAll ? (
                <div key={project.website} className="project p-5 mb-5">
                  <p className="fs-4">
                    {' '}
                    <b> {project.title} </b> -{' '}
                    <small> {project.category} </small>{' '}
                  </p>

                  {project.tools && (
                    <p className="fs-5">
                      {' '}
                      <b>TOOLS:</b> [ {project.tools} ]
                    </p>
                  )}

                  {project.summary && <p> {project.summary} </p>}

                  {project.learnMore && (
                    <Link className="project-btn" to={project.learnMore}>
                      {' '}
                      Learn More{' '}
                      <ion-icon
                        class="ms-1"
                        name="information-circle-outline"
                      ></ion-icon>{' '}
                    </Link>
                  )}

                  {project.website && (
                    <a
                      className="project-btn"
                      href={project.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {' '}
                      Live Version{' '}
                      <ion-icon
                        class="ms-1"
                        name="globe-outline"
                      ></ion-icon>{' '}
                    </a>
                  )}

                  {project.github && (
                    <a
                      className="project-btn"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {' '}
                      Look at Code{' '}
                      <ion-icon class="ms-1" name="logo-github"></ion-icon>{' '}
                    </a>
                  )}
                </div>
              ) : (
                <></>
              )
            )}
            <button
              onClick={(e) => setDisplayAll(!displayAll)}
              className="project-btn"
            >
              {displayAll ? 'Show Few' : `Show All`}{' '}
              <ion-icon name="arrow-down"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
