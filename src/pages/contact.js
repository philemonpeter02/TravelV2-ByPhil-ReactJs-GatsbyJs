import React, {useState} from "react"
import Email from "../components/Email"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Testimonials from "../components/Testimonials"
import HeaderBlack from "../components/HeaderBlack"
import Dropdown from "../components/Dropdown"

const ContactPage = () =>{
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen)
    }
     return(
  <Layout>
    <SEO title="careers" />
    <HeaderBlack toggle={toggle} />
  <Dropdown isOpen={isOpen} toggle={toggle} />
    <Email />
    <Testimonials />

  </Layout>
)
     }
export default ContactPage