import React from "react"
import './App.css'
import userImage from "./assets/user.jpg"

function App() {
  return (
    <main>

        <div className="card">

            <div className="card--img">
                <img src={userImage} />
            </div>

            <div className="card--content">
                
                <h1 className="card--name">Laura Smith</h1>
                <p className="card--role">Frontend Developer</p>
                <p className="card--website"><a href="#">laurasmith.website</a></p>

                <ul className="card--contact">
                    <li><a className="contact--email" href="#"><i className="fa-solid fa-envelope"></i> Email</a></li>
                    <li><a className="contact--linkedin" href="#"><i className="fa-brands fa-linkedin"></i> LinkedIn</a></li>
                </ul>

                <h2>About</h2>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>

                <h2>Interests</h2>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                
            </div>

            <div className="card--footer">
                <ul>
                    <li><a href="#" title="Twitter"><i className="fa-brands fa-square-twitter"></i></a></li>
                    <li><a href="#" title="Facebook"><i className="fa-brands fa-square-facebook"></i></a></li>
                    <li><a href="#" title="Instagram"><i className="fa-brands fa-square-instagram"></i></a></li>
                    <li><a href="#" title="GitHub"><i className="fa-brands fa-square-github"></i></a></li>
                </ul>
            </div>

        </div>

    </main>
  )
}

export default App
