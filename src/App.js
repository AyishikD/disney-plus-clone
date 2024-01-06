import React from "react";
import Home from "./pages/home/Home";
import Detail from "./components/Detail";
import Footer from "./components/Footer"; // Import the Footer component
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        
         {/* Include the Footer component */}
         <Footer />
         </div>
    );
}

export default App;
