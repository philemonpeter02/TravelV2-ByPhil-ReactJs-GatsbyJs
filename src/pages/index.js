import React, {useState} from "react"
import Email from "../components/Email"
import Header from "../components/Header"
import Dropdown from "../components/Dropdown"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"


const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
return(
  <Layout>
    <SEO title="Home" />
    <Header toggle={toggle} />
    <Dropdown isOpen={isOpen} toggle={toggle} />
    <Hero />
    <Trips heading="Our Favorite Destinations" />
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
)
}
export default IndexPage
