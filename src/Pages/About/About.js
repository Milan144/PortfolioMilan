import React from 'react'
import './About.css';
import cvEN from './[EN] CV MILAN HOMMET.pdf';
import cv from './CV MILAN HOMMET.pdf';

function About() {
  return (
    <section class='about'>
      <div class='main'>
        <img src="https://avatars.githubusercontent.com/u/75842903?s=400&u=01d85d8202ab50a8b89c37ef22508c9f10791909&v=4"/>
        
        <div class='about-text'>
          <h1>About Me</h1>
          <h5>Fullstack <span>Developer</span></h5>
          <p>I am 20yo Fullstack Developer student based in France and actually in Web Development Bachelor at MyDigitalSchool. </p>
          <p>HTML, CSS, Javascript, Python, PHP, Bootstrap, MySQL, Symfony, Ionic, Angular, React. </p>
          <a target='_blank' href={cvEN}>
          <button>CV (EN)</button>
          </a>
          <a target='_blank' href={cv}>
          <button>CV (FR)</button>
          </a>
            <div class="set-size charts-container">
   <div class="pie-wrapper progress-30">
     <span class="label">Symfony</span>
     <div class="pie">
      <div class="left-side half-circle"></div>
      <div class="right-side half-circle"></div>
     </div>
   </div>

   <div class="pie-wrapper progress-60">
    <span class="label">Ionic</span>
    <div class="pie">
       <div class="left-side half-circle"></div>
       <div class="right-side half-circle"></div>
     </div>
   </div>

   <div class="pie-wrapper progress-90">
     <span class="label">React</span>
     <div class="pie">
       <div class="left-side half-circle"></div>
       <div class="right-side half-circle"></div>
     </div>
   </div>
            </div>
        </div>
      </div>
    </section>
    
    
    
    
  
  )
}

export default About