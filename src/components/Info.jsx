
import React from "react"
import userImage from "../assets/user.jpg"

export default function Info() {

    return (
        <div className="card--info">
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
            </div>
        </div>
    )

}



