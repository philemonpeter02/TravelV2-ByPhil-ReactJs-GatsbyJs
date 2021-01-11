import React, {useState} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"
import HeaderBlack from "../components/HeaderBlack"
import Dropdown from "../components/Dropdown"

const AboutPage = () => {
  const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen)
    }
  return(
  <Layout>
    <SEO title="about" />
    <HeaderBlack toggle={toggle} />
  <Dropdown isOpen={isOpen} toggle={toggle} />
   <Testimonials />
   <Trips heading="Our Favorite Destinations" />
   <Stats />
  </Layout>
)}

export default AboutPage
