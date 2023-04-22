import React from "react";
import styled from "styled-components";
import Link from "next/link";

// import ExpandMenu from "./ExpandMenu";

// const SNavbarBrand = styled.h2`
//   font-size: 3rem;
// `;
const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s ease;
  background-color: rgba(0, 0, 0, 0.2);
`;
const SDrawer = styled.div`
  z-index: 150;
  position: absolute;
  top: 0;
  height: 100vh;
  width: 50%;
  background-color: white;
  transition: 0.3s ease;
  // margin-top:5rem;
  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
`;

const RightNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  margin-top: 20px
`;
const NavRoutes = styled.div``;
const NavRoute = styled.li`
  display: flex;
  text-decoration: none;
  color: black;
  font-size: 20px;
  padding: 0.5rem;
`;

const LoginButton = styled.button`
  padding: 0.7rem 3rem;
  background-color: white;
  border: 2px solid black;
  border-radius: 3rem;
  transition: 0.3s ease;
  align-self: flex-start;
  &:hover {
    transition: 0.3s ease;
    // border: 1px solid transparent;
    // background-color: yellow;
    // box-shadow: 0px 0px 10px yellow;
  }
`;
const Drawer = ({ isOpen, toggleDrawer }) => {
  return (
    <>
      {isOpen && <Backdrop onClick={toggleDrawer} />}
      <SDrawer isOpen={isOpen}>
        <RightNav>
          {/* <SNavbarBrand>LOGO</SNavbarBrand> */}
          <NavRoutes>

          <NavRoute to="faq" key="home">
                  Faq
                </NavRoute>
                <NavRoute to="aboutus" key="home">
                  About us
                </NavRoute>
                <NavRoute to="getstarted" key="home">
                  Get Started
                </NavRoute>

          </NavRoutes>
          <LoginButton>Login</LoginButton>
        </RightNav>
      </SDrawer>
    </>
  );
};

export default Drawer;
