import React from 'react'
import "./Card.css";
export default function Card() {
  return (
    <div id="about">
      <div class="card-body card">
        <h1 class="card-title1">Designer, Front-end Developer</h1>
        <p class="card-text">I design and code beautifully simple things, and I love what I do.</p>
        <img src='https://cdn.dribbble.com/users/2131993/screenshots/15628381/media/affbd0a5886ea406a8216a4eea77cd15.png?compress=1&resize=1200x900&vertical=top' class="center"></img>
        
      </div>
      <div class="desc-card">
        <h2 class="card-title2">Hi, I’m Sangam. Nice to meet you.</h2>
        <p class="card-text">Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
        </div>
    </div>
  )
}
