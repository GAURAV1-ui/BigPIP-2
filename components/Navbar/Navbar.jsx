import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { FaBars } from "react-icons/fa";
// import logo from "./logo.png";
// import Menu from "./Menu";
const Navbar = ({ toggleDrawer }) => {

  const router = useRouter();
  const clickImageHandler = () => {
    router.push("/");
  }
  return (
    <SNavbar>
      <NavContainer>
        <DrawerButton onClick={toggleDrawer}>
          <FaBars />
        </DrawerButton>
        <SNav onClick = {clickImageHandler}>BigPIP </SNav>
        <RightNav>
          <NavRoutes>
        
                <NavRoute href="faq" key="faq">
                  Faq
                </NavRoute>
                <NavRoute href="aboutus" key="aboutus">
                  About us
                </NavRoute>
                <NavRoute href="getstarted" key="getstarted">
                  Get Started
                </NavRoute>
                <LoginButton>
                  <NavRoute href='login'>
                    Log in/ Sign up
                  </NavRoute>
                </LoginButton>
          </NavRoutes>  
        </RightNav>
      </NavContainer>
    </SNavbar>
  );
};

export default Navbar;

const DrawerButton = styled.button`
  all: unset;
  font-size: 2rem;
  display: grid;
  @media (min-width: 768px) {
    display: none;
  }
`;

const SNavbar = styled.nav`
  padding-bottom: 0rem;
`;
const NavContainer = styled.div`
  padding: 1rem;
  height: 70px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
`;
// const SNavbarBrand = styled.h2`
//   font-size: 2rem;
// `;

// const Image = styled.img`
//     cursor:pointer;
//     width:18%;
//     z-index:1;
//     @media (max-width: 600px) {
//       width: 55%;
//     }
// `;

const SNav = styled.h1 `
  font-size : 35px;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`
const RightNav = styled.div`
  display: flex;
  gap: 2rem;
`;
const NavRoutes = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  display: flex;
  gap: 1rem;
  font-size: 20px;
  align-items: center;
`;
const NavRoute = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 0.5rem;
  transition: 0.5s ease;
  &:hover {
    // transition: 0.5s ease;
    transform: scale(1.2);
  }
`;

const LoginButton = styled.button`
  padding: 8px 25px;
  font-weight: 700;
  font-size: 16px;
  color:black;
  background-color: white;
  border: 2px solid black;
  border-radius: 0.5rem;
  transition: 0.3s ease;
  align-self: flex-start;
  z-index:1;
  cursor:pointer;
  &:hover{
    transform: scale(1.1);
  }
`;