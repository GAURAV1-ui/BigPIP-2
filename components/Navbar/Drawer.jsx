import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const SNavbarBrand = styled.h2`
  font-size: 2.5rem;
`;
const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s ease;
  background-color: rgba(0, 0, 0, 0.2);
`;
const SDrawer = styled.div`
  z-index: 1000;
  position: absolute;
  top: 0;
  height: 100vh;
  width: 60%;
  background-color: white;
  transition: 0.3s ease;
  // margin-top:5rem;
  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
`;

const RightNav = styled.div`
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.1rem 1.5rem;
  // margin-top: 20px
`;
const NavRoutes = styled.div``;
const NavRoute = styled(Link)`
  display: flex;
  z-index: 1000;
  text-decoration: none;
  color: black;
  font-size: 20px;
  padding: 0.5rem;
`;

const LoginButton = styled.button`
  padding: 0.1rem 0.5rem;
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

  const router = useRouter();
  const clickImageHandler = () => {
    router.push("/");
  }

  return (
    <>
      {isOpen && <Backdrop onClick={toggleDrawer} />}
      <SDrawer isOpen={isOpen}>
        <RightNav>
          <SNavbarBrand onClick = {clickImageHandler}>BigPIP</SNavbarBrand>
          <NavRoutes>

              <NavRoute
                href="faq" 
                key="home" 
                onClick={toggleDrawer} >
                  Faq
              </NavRoute>
                <NavRoute
                 href="aboutus" 
                 key="aboutus" 
                 onClick={toggleDrawer} >
                  About us
                </NavRoute>
                <NavRoute 
                  href="getstarted" 
                  key="getstarted" 
                  onClick={toggleDrawer} >
                    Get Started
                </NavRoute>

          </NavRoutes>
          <LoginButton>
            <NavRoute 
            href='signin' 
            onClick={toggleDrawer} >
                Log in/ Sign up
            </NavRoute>
          </LoginButton>
        </RightNav>
      </SDrawer>
    </>
  );
};

export default Drawer;
