import React, {useState} from "react"
import Trips from "../components/Trips"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderBlack from "../components/HeaderBlack"
import Dropdown from "../components/Dropdown"

const TripsPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen)
    }
    return(
  <Layout>
  <HeaderBlack toggle={toggle} />
  <Dropdown isOpen={isOpen} toggle={toggle} />
    <SEO title="trips" />
    <Trips heading="Choose Your Next Trip" />
  </Layout>
)
    }
export default TripsPage
