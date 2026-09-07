import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contributions from './components/Contributions'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contributions />
      </main>
      <Footer />
    </>
  )
}

export default App
