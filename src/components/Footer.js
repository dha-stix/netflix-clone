import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterContainer>
            <Description>Powered by</Description>
            <Name>David Asaolu</Name>
            
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.footer`
width: 100%;
height: 15vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-align: center;
color: white;
`
const Name = styled.h3`
    font-weight: 600
`
const Description = styled.p`
    opacity: 0.8
`
