import Background from './components/Background.js';
import Banner from './components/Banner.js';
import Nav from './components/Nav.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contributions  from './components/Contributions.js';
import Socials from './components/Socials.js';
import './App.css';
import { useState } from 'react';
import data from './data.json';

function App() {
  return (
  <>
    <Background />
    <Banner />
    <Nav />
    <About />
    <Projects skills={data.skills} projects={data.projects}/>
    <Contributions />
    <Socials />
  </>
  );
}

export default App;
