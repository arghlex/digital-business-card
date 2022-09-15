import React from "react"
import './App.css'
import About from "./components/About"
import Info from "./components/Info"
import Interests from "./components/Interests"
import Footer from "./components/Footer"



function App() {
  return (
    <main>
        <div className="card">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    </main>
  )
}

export default App
