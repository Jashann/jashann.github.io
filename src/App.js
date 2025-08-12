import React from 'react';
import {
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import { URL_ROUTES } from "./assets/helpers/URL_ROUTES.routes"

import ScrollToTop from "./components/ScrollTop";

import Navbar from "./components/navbar.component"

import IndexPage from "./pages/index.page"
import ProjectPage from "./pages/projects.page"
import AboutPage from "./pages/about.page"
import NotFoundPage from "./pages/not-found.page"
import ContactComponent from "./components/contact.component"
import TravelPage from "./pages/travel.page"

// Projects
import ProjectBudgetIt from "./pages/projects/budget.project"
import ProjectThoughts from "./pages/projects/thoughts.project"

function App() {

  return (
   <HashRouter>

      <div style={{ minHeight: '100vh' }}>
        
        <ScrollToTop>

          <Navbar />
          
          <Routes>
            <Route path={URL_ROUTES.index}                  element={ <IndexPage /> } />
            <Route path={URL_ROUTES.projects}               element={ <ProjectPage/> } />
            <Route path={URL_ROUTES.about}                  element={ <AboutPage /> } />
            <Route path={URL_ROUTES.contact}                element={ <ContactComponent /> } />
            <Route path={URL_ROUTES.other_travel}           element={ <TravelPage /> } />

            {/* Projects */}
            <Route path={URL_ROUTES.projects_budget_it}     element={ <ProjectBudgetIt /> } />
            <Route path={URL_ROUTES.projects_thoughts}      element={ <ProjectThoughts /> } />

            <Route path="*"                                 element={ <NotFoundPage /> } />
          </Routes>

        </ScrollToTop>
        
      </div>

    </HashRouter>

  );
}

export default App;
