import React from 'react'
import { Link } from 'react-router-dom';
import { URL_ROUTES } from '../assets/helpers/URL_ROUTES.routes'


export default function IndexPage() {
  return (
    <>
      <header className="main-header">
        <div className="main-content">
          <div className="main-content-text lead p-4 mb-5">
            <p className="text-justify">
              Hi there,
              <br />
              I'm Jashan, pursuing the Bachelors in Computer Science at
              University of Manitoba, with a keen interest in developing
              scalable software and system design. I'm skilled in Java, C++, C,
              C#, SQL, and Python, and have experience in both frontend and
              backend development using JavaScript, PHP, Django, React, VueJs,
              AJAX, and SQL. My portfolio includes a diverse range of
              applications, from data processing and visualization tools to
              versatile general-purpose programs.
            </p>
            <p className="text-start mb-0">
              Feel free to contact me on email at
              <a
                className="text-decoration-none ms-1 text-light in-flex-center"
                href={'mailto:' + URL_ROUTES.a_email}
                rel="noreferrer"
              >
                {URL_ROUTES.a_email}
                <ion-icon size="small" name="mail-outline"></ion-icon>
              </a>
              <span className="in-flex-center"> </span> or
              <a
                className="text-decoration-none ms-1 text-light in-flex-center"
                target="_blank"
                href={URL_ROUTES.a_linkedIn}
                rel="noreferrer"
              >
                LinkedIn
                <ion-icon size="small" name="logo-linkedin"></ion-icon>
              </a>
            </p>
          </div>

          <div className="main-header-btns d-flex">
            <Link
              to={URL_ROUTES.projects}
              className="m-1 btn btn-secondary main-button"
            >
              Projects <ion-icon size="large" name="laptop-outline"></ion-icon>{' '}
            </Link>
            <Link
              to={URL_ROUTES.about}
              className="m-1 btn btn-secondary main-button"
            >
              About Me <ion-icon size="large" name="book-outline"></ion-icon>{' '}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}