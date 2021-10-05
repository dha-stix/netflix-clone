import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import logo from "../images/logo.png"
import avatar from "../images/avatar.png"

const Nav = () => {
    const [show, setShow] = useState(false)

    useEffect(()=> {
        window.addEventListener("scroll", ()=> {
        window.scrollY > 100 ? setShow(true) :  setShow(false)
        })
        return ()=> {
            window.removeEventListener("scroll", ()=>{})
        }
    }, [])

    return (
        <NavContainer showAttribute={show}>
            <Logo src={logo} alt="Netflix logo"/>
            <Avatar src={avatar} alt="Netflix Avatar"/>
        </NavContainer>
    )
}

export default Nav

const NavContainer = styled.nav`
width: 100%;
background-color: ${props => props.showAttribute ? "black" : "transparent"};
height: 70px;
position: fixed;
top:0;
z-index: 10;
display: flex;
align=items: center;
justify-content: space-between;
padding: 10px 20px;
transition: all 0.5s;
transition-timing-function: ease-in;

`
const Logo = styled.img`
    height: 40px;
    object-fit: contain;
    cursor:pointer;
`
const Avatar = styled(Logo)``