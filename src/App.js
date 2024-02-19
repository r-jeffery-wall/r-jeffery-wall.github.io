import Banner from './components/Banner.js';
import Nav from './components/Nav.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contributions from './components/Contributions.js';
import Socials from './components/Socials.js';
import './App.css';
import { useState } from 'react';
import data from './data.json';

function App() {
  const [filters, setFilters] = useState(data.skills);

  function sliderHover(element) {
    let target = element.nextSibling;

    target.style.opacity = 100;
    target.style.bottom = 0;
  }

  function sliderHoverOff(element) {
    let target = element.nextSibling

    setTimeout(function () {
      target.style.bottom = "30px";
      target.style.opacity = 0;
    }, 1000)
  }

  function updateFilters(name) {
    if (filters === data.skills) {
      setFilters(() => [name]);
    } else {
      setFilters((prev) => [...prev, name]);
    }
  }

  return (
    <>
      <Banner />
      <Nav />
      <About />
      <Projects skills={data.skills} projects={data.projects} sliderHover={sliderHover} sliderHoverOff={sliderHoverOff} filters={filters} updateFilters={updateFilters}/>
      <Contributions />
      <Socials socials={data.socials} sliderHover={sliderHover} sliderHoverOff={sliderHoverOff} />
    </>
  );
}

export default App;
