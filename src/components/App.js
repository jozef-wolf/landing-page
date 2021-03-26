import React from "react";
import Navbar from "./Nav/Navbar";
import HeaderSection from "./HeaderSection";
import Footer from "./Footer";
import MainSection from "./MainSection";
import InfoSection from "./InfoSection";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeaderSection />
      <InfoSection />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
