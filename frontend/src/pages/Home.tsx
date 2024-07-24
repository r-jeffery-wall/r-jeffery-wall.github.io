import { About } from '../components/about/About'
import { Hero } from '../components/hero/Hero'
import { Location } from '../components/location/Location'
import { SiteDescription } from '../components/siteDescription/SiteDescription'

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <SiteDescription />
      <Location />
    </>
  )
}
