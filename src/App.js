import Background from './components/Background.js';
import Banner from './components/Banner.js';
import Nav from './components/Nav.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contributions from './components/Contributions.js';
import Socials from './components/Socials.js';
import './App.css';
import { useState, useEffect } from 'react';
import data from './data.json';

function App() {
  // Initialisation of values for the background.
  const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
  const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nums = '0123456789';
  const alphabet = katakana + latin + nums;
  const fontSize = 16;
  const canvas = document.getElementById('matrix');
  const [backgroundActivated, setBackgroundActivated] = useState(true);
  const [raindrops, setRaindrops] = useState([])

  function sliderHover(element) {
    let target = element.nextSibling;
    console.log(target);

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

  function matrixRain(canvas) {
    console.log('raining!')
    const context = canvas.getContext('2d');

    const fontSize = 16;

    if (backgroundActivated !== true) { // Logic that I added for the user to toggle the background animation on or off.
      context.fillStyle = 'rgba(0, 0, 0, 0.05)';
      context.fillRect(0, 0, canvas.width, canvas.height);
      return
    }
    // Function for drawing the 'raindrops'.
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#0F0';
    context.font = fontSize + 'px monospace';

    for (let i = 0; i < raindrops.length; i++) {
      const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length)); // A random character is chosen from our alphabet.
      context.fillText(text, i * fontSize, raindrops[i] * fontSize); // The random character is drawn at specified coordinates.

      if (raindrops[i] * fontSize > canvas.height && Math.random() > 0.975) { //This handles what happens when the raindrops scroll off the screen.
        raindrops[i] = 0;
      }
      raindrops[i]++
    }

    setRaindrops((prev) => prev.map(element => element + 1));
  }

  useEffect(() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 16;
    const columns = canvas.width / fontSize; // This uses the font size to calculate how many columns can fit on the screen.

    setRaindrops(() => {
      const initialRaindrops = [];

      for (let x = 0; x < window.innerWidth / fontSize; x++) {
        initialRaindrops[x] = 1; // The y axis for each column is initialised to 1.
      }

      return initialRaindrops;
    })
  }, [window.innerWidth, window.innerHeight])

  useEffect(() => {
    const interval = setInterval(() => matrixRain(document.getElementById('matrix')), 50);
    return () => clearInterval(interval);
  }, [])

  return (
    <>
      <Background />
      <Banner />
      <Nav />
      <About />
      <Projects skills={data.skills} projects={data.projects} sliderHover={sliderHover} sliderHoverOff={sliderHoverOff} />
      <Contributions />
      <Socials socials={data.socials} sliderHover={sliderHover} sliderHoverOff={sliderHoverOff} />
    </>
  );
}

export default App;
