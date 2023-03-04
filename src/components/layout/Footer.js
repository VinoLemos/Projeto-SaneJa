import React from "react";
import {Container, Navbar, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import {MdHome, MdChat, MdArticle} from "react-icons/md";

import styled from "styled-components";

const Styles = styled.div`

    nav {
        justify-content: center;
    }

    a {
        font-size: 1.5em;
        padding: 1em;
        text-decoration: none;
        color: #fff;
        text-transform: uppercase;
        
        &:hover {
            background-color: rgba(0, 0, 0, 0.5);
        }
    }

    svg {
        margin-right: 0.5em;
    }
`;

function Footer() {
    return(
        <Styles>
            <Container >
            <Navbar fixed="bottom">
                <Nav>
                    <Nav.Item>
                        <Link to="/"> <MdHome/> Inicio</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/sobre"> <MdArticle/> Sobre nós</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/contato"> <MdChat/> Contato</Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </Container>
        </Styles>
        
    )
}

export default Footer