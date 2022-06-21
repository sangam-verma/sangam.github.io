import React from "react";
import "./Header.css";
import CV from '../../assets/resume.pdf'
const header = () => {
    return (
        <>
       <div className="container header-container">
      <section id="home"> <h5>Hello I am</h5>
      <h1>Sangam Verma.</h1>
      <h5>Web Developer.</h5>
      <a href={CV} download><button class="button-39 mx-2" role="button">Download CV</button></a>
     <a href="#contact"> <button className="button-39 mx-2 button-1" role="button"  onclick="window.location.href = 'https://ide.geeksforgeeks.org';">Say Hello</button>
      </a>
      </section></div>
        </>
    );
}
export default header;