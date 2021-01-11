import React from 'react'
import styled from 'styled-components';
import {Button} from './Button';
import {menuData} from '../data/MenuData';
import {Link} from 'gatsby';
import {FaTimes} from 'react-icons/fa';

const Dropdown = ({toggle, isOpen}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon  onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((item, index) => (
                        <DropdownLink to={item.link} key={index}>
                            {item.title}
                        </DropdownLink>
                    ))}
                </DropdownMenu>
                <BtnWrap>
                <Button primary="true" round="true" big="true" to="/trips">Book a Flight</Button>
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
const Icon = styled.div`
    position: absolute;
    top: 1.5rem;
    right: 1.1rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
  `
  
  const DropdownMenu = styled.div` 
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4 rem;
  @media screen and (max-width: 480px) {
      grid-template-rows: repeat(4, 60px);
    }
  `
const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
  `
const DropdownWrapper = styled.div``

const CloseIcon = styled(FaTimes)`
color: #fff;
`;
const DropdownLink = styled(Link)`
display:flex;
align-items: center;
justify-content:center;
color: #fff;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
cursor: pointer;
transition: 0.2s ease-in-out;
@media screen and (max-width: 350px) {
  font-size: 16px;
}

&:hover{
    color:#F26A2E;
}
`;
const DropdownContainer = styled.div`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #000;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;