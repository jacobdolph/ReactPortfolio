import React from "react";
import { Row, Container } from '../components/Grid'
import Navbar from "../components/Navbar";
import Navmobile from "../components/Navmobile";
import WebDev from "../components/WebDev";
import Header from "../components/Header";
import PortfolioTitle from "../components/PortfolioTitle";
import Mapout from "../components/Mapout";
import Tech from "../components/Tech";
import TechTitle from "../components/TechTitle";
import SectionWrapper from "../components/SectionWrapper";



const Home = () => {
    return (
        <Container  >
            <Navbar />
            <Navmobile />
            <SectionWrapper>
                <Row>
                    <Container container>
                        <Header />
                        <WebDev />
                    </Container>
                </Row>
            </SectionWrapper>
            <SectionWrapper>

                <Row>
                    <PortfolioTitle />
                    <Mapout />
                </Row>
            </SectionWrapper>
            <SectionWrapper>

                <Row>
                    <TechTitle />
                    <Tech />
                </Row>
            </SectionWrapper>


        </Container >
    );
};

export default Home;