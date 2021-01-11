import React, {useState} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Testimonials from "../components/Testimonials"
import HeaderBlack from "../components/HeaderBlack"
import Dropdown from "../components/Dropdown"

const CareersPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen)
    }
    return(
  <Layout>
    <SEO title="careers" />
    <HeaderBlack toggle={toggle} />
  <Dropdown isOpen={isOpen} toggle={toggle} />
    <Testimonials />

  </Layout>
)
}
export default CareersPage
