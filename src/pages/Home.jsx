import styled from "styled-components"
import Header from "../ui/Header"
import Navbar from "../ui/Navbar"
import Section1 from "../ui/Section1"
import Slider from "../ui/slider"
import Card from "../ui/Card"
import Section2 from "../ui/Section2"
import Testimonials from "../ui/Testimonials"
import Footer from "../ui/Footer"



function Home() {
    return (
        <>
        < Navbar/>
         <Header/>   
         <Section1/>
         <Slider/>
         <Section2/>
         <Testimonials/>
         <Footer/>
        </>
    )
}

export default Home
