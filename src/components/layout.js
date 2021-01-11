import React from "react"
import Footer from "./Footer"
import { GlobalStyle } from "./Styles/GlobalStyles"

const Layout = ({ children }) => {

  return (
    <>
    <GlobalStyle />
        <main>{children}</main>
     <Footer />
    </>
  )
}


export default Layout
