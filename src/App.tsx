import {Routes, Route, createBrowserRouter, RouterProvider} from 'react-router-dom';
import styled from "styled-components";

import Nav from "./components/Nav.tsx"
import Header from "./components/Header.tsx"
import Footer from "./components/Footer.tsx"
import Home from "./components/Home.tsx"
import Education from "./components/Education.tsx"
import Experience from "./components/Experience.tsx"
import Certifications from "./components/Certifications.tsx"
import Achievements from "./components/Achievements.tsx"
import Projects from "./components/Projects.tsx"

const PageWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: rgb(208, 255, 172);

  @media screen and (max-width: 900px) {
        width: 100%;
        height: 100vh;
        flex-direction: column;
  }
`;




function Root() {
  return(
    <>
      <Nav/>
      <Routes>
        <Route path={`/`} element={<Home/>}/>
        <Route path={`/education`} element={<Education/>}/>
        <Route path={`/experience`} element={<Experience/>}/>
        <Route path={`/certifications`} element={<Certifications/>}/>
        <Route path={`/achievements`} element={<Achievements/>}/>
        <Route path={`/projects`} element={<Projects/>}/>
      </Routes>
    </>
  );
}

const router=createBrowserRouter(
  [
    {path:"*", Component: Root}
  ]
);

export default function App() {
  return(
    <>
      <PageWrapper>
        <Header/>
        <Container>
          <RouterProvider router={router}/>
        </Container>
        <Footer/>
      </PageWrapper>
    </>
  );
}