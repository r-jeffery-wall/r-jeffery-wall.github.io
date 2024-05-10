import { About } from '../components/about/About'
import { Hero } from '../components/hero/Hero'
import { Location } from '../components/location/Location'

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Location />
    </>
  )
}
