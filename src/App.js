import Banner from './components/Banner.js';
import Nav from './components/Nav.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contributions from './components/Contributions.js';
import Socials from './components/Socials.js';
import './App.css';
import { useEffect, useState } from 'react';
import data from './data.json';

function App() {
  const [filters, setFilters] = useState(data.skills);
  const [bannerVisible, setBannerVisible ] = useState(true);

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
    } else if (filters.includes(name)) {
      if (filters.length === 1) {
        clearFilters();
      } else {
        setFilters((prev) => prev.filter((skill) => skill !== name));
      }
    } else {
      setFilters((prev) => [...prev, name]);
    }
  }

  function clearFilters() {
    setFilters(data.skills);
  }

  function isVisible(element) {
    if (window.scrollY > element.offsetHeight) {
      setBannerVisible(false);
    } else {
      setBannerVisible(true);
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", () => isVisible(document.getElementById('main-banner')));
    return () => {
      document.removeEventListener("scroll", () => isVisible(document.getElementById('main-banner')));
    }
  }, [])

  return (
    <>
      <Banner />
      <Nav bannerVisible={bannerVisible} />
      <About />
      <Projects skills={data.skills} projects={data.projects} sliderHover={sliderHover} sliderHoverOff={sliderHoverOff} filters={filters} updateFilters={updateFilters} clearFilters={clearFilters} />
      <Contributions />
      <Socials socials={data.socials} sliderHover={sliderHover} sliderHoverOff={sliderHoverOff} />
    </>
  );
}

export default App;
