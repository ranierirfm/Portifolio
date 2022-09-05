import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Sobre from "../components/Sobre";
import Tecnologies from "../components/Tecnologies";


function Home() {
    return (
    <>
    <Header />
    <Sobre/>
    <Tecnologies />
    <Projects />
    <Footer />
   </>
    );
}

export default Home;