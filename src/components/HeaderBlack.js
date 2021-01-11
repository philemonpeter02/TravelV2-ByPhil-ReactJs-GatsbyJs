import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Link } from 'gatsby';
import { CgLoadbarSound } from 'react-icons/cg';
import { menuData } from '../data/MenuData'
import { Button } from "./Button";




const Header = ({toggle}) => {
  const [scroll, setScroll] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 300 ){
        setScroll(true)
    }else{

        setScroll(false)
    }
}

useEffect(() => {
  changeNav()
  window.addEventListener("scroll", changeNav)
  }, [])
  
  return(
  <Nav active={scroll} >
    <NavLink to="/" >EXPLORIX By Phil</NavLink>
    <Bars onClick={toggle} />
    <NavMenu>
      {menuData.map((item, index) => (
        <NavLink to={item.link} key={index}>
          {item.title}
        </NavLink>
      ))}
    </NavMenu>
    <NavBtn>
      <Button primary="true" round="true" to="/trips">Book a Flight</Button>
    </NavBtn>
  </Nav>
  
)
}
export default Header

const Nav = styled.nav`
transition: 0.5s all ease-in-out;
background: ${({active}) => (active ? "#000" : "#000")};
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1300px) / 2);
z-index: 999;
top: ${({active}) => active ? "-80px" : "none"};
top: ${({active}) => active ? "0" : "-80px"};
position: sticky;
`
const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

`

const Bars = styled(CgLoadbarSound)`
display: none;
color: #fff;
@media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-25%, 38%) rotate(-90deg);
  font-size: 2.8rem;
  cursor: pointer;
}
`
const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -48px;
@media screen and (max-width: 768px) {
  display: none;
}
`
const NavBtn = styled.div`
display:flex;
align-items: center;
margin-right: 24px;
@media screen and (max-width: 768px) {
  display: none;
}
`