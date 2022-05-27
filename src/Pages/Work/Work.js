import React from 'react'
import './Work.css'

//Documents
import internship1FR from '../../documents/work/internship1FR.pdf'
import internship2FR from '../../documents/work/internship2FR.pdf'

import ap1 from '../../documents/work/ap1.pdf'
import ap2 from '../../documents/work/ap2.pdf'
import ap3 from '../../documents/work/ap3.pdf'
import ap4 from '../../documents/work/ap4.pdf'
import ap5 from '../../documents/work/ap5.pdf'
import ap6 from '../../documents/work/ap6.pdf'
import ap7 from '../../documents/work/ap7.pdf'
import apref from '../../documents/work/apref.pdf'


function Work() {
  return(
    <div class="work">
    <div class="container">
  <div class="box">
    <span></span>
    <div class="content">
      <h2>Flappy bird</h2>
      <p>A simple Flappy bird game made in 6 hours with a friend (Javascript)</p>
      <a target='_blank' href='https://github.com/Milan144/flappybird'>Github</a>
    </div>
  </div>
  <div class="box">
    <span></span>
    <div class="content">
      <h2>My BTS SIO first year internship at ENSA Rouen</h2>
      <p>PHP, Web development, MySQL</p>
      <a target='_blank' href={internship1FR}>Read More (FR)</a>
    </div>
  </div>
  <div class="box">
    <span></span>
    <div class="content">
      <h2>My BTS SIO second year internship at St Agnes high school</h2>
      <p>React, Javascript, MySQL, Fullstack</p>
      <a target='_blank' href={internship2FR}>Read More (FR)</a>
    </div>
  </div>
  <div class="box">
    <span></span>
    <div class="content">
      <h2>AP 7 - TKT Ionic</h2>
      <p>Creation of an app that manage the animals, the alerts and the health status of the animals in a zoo.</p>
      <a target='_blank' href={ap7}>Read More (FR)</a>
    </div>
  </div>
  <div class="box">
    <span></span>
    <div class="content">
      <h2>AP 6 - GESamm</h2>
      <p>C# app to manage drugs with a SQL Server database.</p>
      <a target='_blank' href={ap6}>Read More (FR)</a>
    </div>
  </div>
  <div class="box">
    <span></span>
    <div class="content">
      <h2>AP 5 - Comeleon</h2>
      <p>Creation of a website in Symfony (PHP) for a professionnal</p>
      <a target='_blank' href={ap5}>Read More (FR)</a>
    </div>
  </div>
  <div class="box">
    <span></span>
    <div class="content">
      <h2>AP - SEO</h2>
      <p>In this presentation I explain how to get a better visibility on your website with google search console.</p>
      <a target='_blank' href={apref}>Read More (FR)</a>
    </div>
  </div>
  <div class="box">
    <span></span>
    <div class="content">
      <h2>AP 4 - Impress</h2>
      <p>PHP Website to manage the usage of the peripherals of a fake association</p>
      <a target='_blank' href={ap4}>Read More (FR)</a>
    </div>
  </div>
  <div class="box">
    <span></span>
    <div class="content">
      <h2>AP 3 - Prosante</h2>
      <p>C# App to manage medical visits.</p>
      <a target='_blank' href={ap3}>Read More (FR)</a>
    </div>
  </div>
  <div class="box">
    <span></span>
    <div class="content">
      <h2>AP 2 - GSB Vistat</h2>
      <p>Graphs to manage travel costs by region and department on Excel.</p>
      <a target='_blank' href={ap2}>Read More (FR)</a>
    </div>
  </div>
  <div class="box">
    <span></span>
    <div class="content">
      <h2>AP 1 - DIGICOD</h2>
      <p>Security app in C# to manage the access to a building and a computer room.</p>
      <a target='_blank' href={ap1}>Read More (FR)</a>
    </div>
  </div>
    </div>
    </div>
    
  )
}

export default Work;