import React from 'react';
import './App.css';
import FirstSection from './components/FirstSection';
import HeaderSection from './components/Header';
import SecondSection from "./components/SecondSection";
import ThirdSection from './components/ThirdSection';
import FourthSection from "./components/FourthSection";
import FiveSection from "./components/FiveSection";
import FooterSection from "./components/FooterSection";



function App() {
    return (
        <div className="App">

            <HeaderSection/>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>
            <FiveSection/>
            <FooterSection/>

        </div>
    );
}

export default App;
