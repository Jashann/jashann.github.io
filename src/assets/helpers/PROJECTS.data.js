import { URL_ROUTES } from "./URL_ROUTES.routes"

export const CATEGORIES = {
    personal: "Personal Project",
    group:    "Group Project",
    data:     "Data Structures & Algorithms",
    web:      "Web Development",
}

export const PROJECTS = [
  {
    title: 'Pique - Social Networking App',
    summary:
      'A cross-platform social networking app that brings people together within 100 meters radius, promoting face-to-face socializing. Features a tailored algorithm for location tracking with minimal battery usage and a React Native interface for enhanced user retention and usability.',
    website: 'https://drive.google.com/file/d/1G1TmAqHqRMuk9R4M9LJCIEZGp2_wtUzE/view?usp=sharing',
    github: 'https://github.com/nnm2602/robobison-pique-submission',
    tools: 'JavaScript, Node.js, React Native, Location Services, Battery Optimization, Cross-Platform Development',
    category: CATEGORIES.personal,
    tags: [CATEGORIES.personal, CATEGORIES.web],
  },
  {
    title: 'University Database Management System',
    summary:
      'Comprehensive database management system streamlining university students and staff data records. Features efficient JDBC queries and stored procedures achieving 50% reduction in data retrieval time. Built on high-performance PostgreSQL with 10+ tables handling 10,000+ rows, with intuitive JavaFX interface supporting full CRUD operations.',
    website: 'https://drive.google.com/file/d/1G1TmAqHqRMuk9R4M9LJCIEZGp2_wtUzE/view?usp=sharing',
    github: 'https://github.com/Jashann/Hospital-Database-Management-System',
    tools: 'Java, PostgreSQL, JDBC, JavaFX, Scene Builder, SQL, Stored Procedures, Database Optimization',
    category: CATEGORIES.personal,
    tags: [CATEGORIES.personal, CATEGORIES.data],
  },
  {
    title: 'THOUGHTS SHARING - DJANGO BASED APP',
    summary:
      "A cloud-based app where users could create account to read other users' articles, and share their ideas on such articles, and write their own articles.",
    website: 'http://jashangill3592.pythonanywhere.com/',
    github: 'https://github.com/Jashann/django-articles-app',
    learnMore: URL_ROUTES.projects_thoughts,
    tools:
      'Django, Restful API, SQL, JavaScript, Server-side Rendering, Authentication',
    category: CATEGORIES.personal,
    tags: [CATEGORIES.personal, CATEGORIES.web],
  },
  {
    title: 'Money Lens',
    summary:
      'A personal finance web application that makes money management intuitive and user-friendly. Features secure financial data import through bank connections and CSV uploads, with powerful search, filter, and categorization tools. Includes interactive graphs, statistics, and custom spending/savings goal tracking.',
    github: 'https://github.com/Money-Lens/Money-Lens-App',
    tools: 'React, Node.js, Express, MongoDB, Plaid API, Chart.js, JWT Auth, Material-UI',
    category: CATEGORIES.group,
    tags: [CATEGORIES.group, CATEGORIES.web, CATEGORIES.data],
  },
  {
    title: 'GRAPH INTERFACE',
    summary:
      'A complete graph analysis software. This software was developed using all my previously made data analytics project concepts in a more practical way. This software uses my value compression algorithm for aligning the line graph inside the frame. Also, it has an evaluation panel, where this program evaluates the given raw data according to basic statistical formulas and show that information on the panel. This software can be used as an individual product for statistical / data science research tool or as a part of other software.',
    website: 'https://graph-interface.netlify.app/',
    github: 'https://github.com/JayedRafiProjects/graph-interface',
    tools: 'Java, Java Swing, JavaScript, HTML5, CSS, Bootstrap',
    category: CATEGORIES.group,
    tags: [CATEGORIES.group, CATEGORIES.data],
  },
  {
    title: 'SMART DICTIONARY',
    summary:
      'An English dictionary rich with features like bookmarking, different themes, and ability to pronounce the text. It interacts with two external APIs and fetches data from those resources.',
    website: 'https://jashann.github.io/Smart-Dictionary/',
    github: 'https://github.com/Jashann/Smart-Dictionary/',
    tools:
      'JavaScript, Browser API, LocalStorage, Design Patterns, Restful APIs',
    category: CATEGORIES.personal,
    tags: [CATEGORIES.personal, CATEGORIES.web],
  },
  {
    title: 'BUDGET IT - In Progress',
    summary:
      'An interactive app that you could connect your bank account or create your account manually, and it records all your expenses and income sources by specific month and year, and show you in graphs in user-friendly, and visually understandable way. The apps predicts the projected income and expenses depending on the past months. All the recorded data could be exported into excel and pdf files.',
    // website: "https://thoughts-sharing.herokuapp.com/",
    // github: "https://github.com/Jashann/django-articles-app",
    learnMore: URL_ROUTES.projects_budget_it,
    tools: 'React, TypeScript, NodeJs, MangoDB, Graph Analysis, Statistics',
    category: CATEGORIES.group,
    tags: [CATEGORIES.group, CATEGORIES.web, CATEGORIES.data],
  },
  {
    title: 'GITHUB FINDER',
    summary:
      'Find out any github user by entering the username and look at the important info about their profiles.',
    website: 'https://jashann.github.io/Github-Finder/',
    github: 'https://github.com/Jashann/Github-Finder/',
    tools: 'ReactJS, Context Api, Bootstrap',
    category: CATEGORIES.personal,
    tags: [CATEGORIES.personal, CATEGORIES.web],
  },
  {
    title: 'Colorful Portfolio',
    summary:
      "I had developed my portfolio website to be much more vibrant before. My current portfolio focuses on minimalist design so the viewer's focus remains on actual content rather than design. ",
    website: 'https://jashann.github.io/portfolio-v2',
    github: 'https://github.com/Jashann/portfolio-v2',
    tools: 'HTML, CSS, SASS, JAVASCRIPT',
    category: CATEGORIES.personal,
    tags: [CATEGORIES.personal, CATEGORIES.web],
  },
]