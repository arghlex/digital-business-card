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
                <div className="card--role">Frontend Developer</div>
                <div className="card--website"><a href="#">laurasmith.website</a></div>

                <ul className="card--contact">
                    <li><a className="contact--email" href="">Email</a></li>
                    <li><a className="contact--linkedin" href="">LinkedIn</a></li>
                </ul>

                <h2>About</h2>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>

                <h2>Interests</h2>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                
            </div>

            <div className="card--footer">
                <ul>
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>GitHub</li>
                </ul>
            </div>

        </div>

    </main>
  )
}

export default App
