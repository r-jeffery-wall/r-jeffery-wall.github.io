import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

interface ProjectsState {
  projectsList: ProjectInterface[]
  filterList: String[]
}

export interface ProjectInterface {
  name: string
  url: string
  description: string
  image: {
    path: string
    alt: string
  }
  skills: string[]
}

const initialState: ProjectsState = {
  projectsList: [
    // Dummy data.
    {
      name: 'ReadOnlyReddit',
      url: 'https://rowanjefferywall.com/codecademy-reddit-client/',
      description:
        "This app was built from a Codecademy portfolio project. It is a React-Redux app that interfaces with the Reddit api to deliver posts and comments to the user, as well as lists of Subreddits. I used Bootstrap for the first time with this project and found that it streamlined my layout and styling workflow. I enjoyed building reducers using Redux toolkit and am really proud of the final result. There were some things I didn't have time to fully implement, such as routing, but I'd like to revist and improve this one.",
      image: {
        path: 'ReadOnlyReddit',
        alt: 'A screenshot from the ReadOnlyReddit app.',
      },
      skills: ['React', 'Redux', 'Bootstrap', 'JavaScript'],
    },
    {
      name: 'SQL Query Web App',
      url: '',
      description:
        'At my current job I worked on a side project to build a graphical interface for our team to quickly make commonly used SQL queries to our database. This was done in Python and I began using the PySimpleGUI library for the GUI with the SQL interface handled by psycopg2. I then developed this into a web-app by using Streamlit. This was then built as a Docker image and deployed as a web-app using Kubernetes and Terraform. I also worked to implement continuous integration principles to this project.',
      image: {
        path: 'SQLApp',
        alt: 'an image showing a streamlit interface for making SQL queries.',
      },
      skills: [
        'Python',
        'Postgres',
        'Streamlit',
        'Docker',
        'Kubernetes',
        'Terraform',
      ],
    },
    {
      name: 'Transport Dashboard',
      url: 'https://github.com/r-jeffery-wall/e_paper_transport_dashboard',
      description:
        "This was a hobby project where I built a transport dashboard to show upcoming public transport departures using a Raspberry Pi Zero and an E-Paper display. Although not a full-stack app this project taught me a lot about APIs, and Python's requests library. Publishing my project on GitHub meant that I had to make sure that the code could be configured to individual use cases and was well-documented.",
      image: {
        path: 'transport_dashboard',
        alt:
          'the transport dashboard, displaying upcoming departure information for four key stations in London.',
      },
      skills: ['Python', 'Bash', 'Git'],
    },
    {
      name: 'Mismatched Quote Generator',
      url: 'https://www.rowanjefferywall.com/Mismatched-Quote-Machine',
      description:
        'This is a combination of two smaller projects of mine. When working through the FreeCodeCamp projects I made a React random quote machine. More recently I have also made a mismatched quote generator in native JavaScript as part of the Codecademy front-end course. By combining these two projects together I helped to refresh my React skills.',
      image: {
        path: 'mismatched_quotes',
        alt:
          "A screenshot of the mismatched quotes generator web-app.  The quote reads: 'Genius is one percent inspiration and death and taxes.'",
      },
      skills: ['JavaScript', 'React', 'HTML', 'CSS'],
    },
    {
      name: 'Jamming',
      url: 'https://codecademy-jammming-lilac.vercel.app',
      description:
        'This project was part of the Codecademy Full-Stack Web Developer Course. This web app uses React and the Spotify API to allow users to create playlists and save them to their account.',
      image: {
        path: 'jamming',
        alt: "A screenshot showing the Jamming web app frontend.'",
      },
      skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Git'],
    },
    {
      name: 'Markdown Generator',
      url: 'https://codepen.io/rowjw/full/JjLmdYq',
      description:
        'I built this markdown generator using a previous version of React as part of the FreeCodeCamp Front End Development Libraries Certification. Markdown entered on the left hand side of the screen will be rendered on the right.',
      image: {
        path: 'MarkdownGenerator',
        alt:
          "A screenshot showing the markdown generator with some template markdown text.'",
      },
      skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Git'],
    },
    {
      name: 'React Calculator',
      url: 'https://codepen.io/rowjw/full/wvjEvro',
      description:
        'This is a simple JavaScript calculator that uses React (a previous version). This project was part of the FreeCodeCamp Front End Development Libraries Certification.',
      image: {
        path: 'ReactCalculator',
        alt: "A screenshot showing the calculator webapp.'",
      },
      skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Git'],
    },
    {
      name: 'React-Redux Flashcards',
      url: 'https://codecademy-flashcards-two.vercel.app',
      description:
        'Built from a challenge project on Codecademy, this app allows users to create topics and assign quizzes and flashcards to them. It is built using React, Redux, and React-router.',
      image: {
        path: 'Flashcards',
        alt: 'A screenshot showing the flashcard web-app.',
      },
      skills: ['JavaScript', 'React', 'Redux', 'Git'],
    },
    {
      name: 'BMI Calculator',
      url: 'https://frontend-mentor-bmi-calculator.vercel.app',
      description:
        'This project came from Frontend Mentor. I had to build this BMI Calculator app, trying to match the provided design as closely as property. I used a React component for the actual calculator. I also honed my skills with CSS Grid and tried my hand at using SASS for the CSS for the first time.',
      image: {
        path: 'BMICalc',
        alt: 'A screenshot showing the BMI Calculator app.',
      },
      skills: ['JavaScript', 'React', 'CSS', 'Git'],
    },
  ],
  filterList: [],
}

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    updateFilters: (state, action: PayloadAction<string>) => {
      if (state.filterList.includes(action.payload)) {
        // If a skill is already filtered, it will be removed from the list.
        state.filterList = state.filterList.filter(
          (skill) => skill !== action.payload
        )
      } else {
        state.filterList.push(action.payload)
      }
    },
    clearFilters: (state) => {
      state.filterList = []
    },
  },
})

export const selectProjects = (state: RootState) => state.projects.projectsList
export const selectFilters = (state: RootState) => state.projects.filterList
export const { updateFilters, clearFilters } = projectsSlice.actions
export default projectsSlice.reducer
