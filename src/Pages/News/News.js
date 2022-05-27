import React from 'react'
import './News.css'

function News() {
  return(
    <div class="news">
    <div class="container">
  <div class="box">
    <span></span>
    <div class="content">
      <h2>The new upcoming Swift Playground 4 for iPad !</h2>
      <p>In this article we will see what's new in the closed beta of Swift Playground 4</p>
      <a target='_blank' href='#'>Read More</a>
    </div>
  </div>
  <div class="box">
    <span></span>
    <div class="content">
      <h2>The 7 best tools to develop cross-plateform apps</h2>
      <p>A top 7 of the best mobile cross developement tools</p>
      <a target='_blank' href="#">Read More</a>
    </div>
  </div>
  <div class="box">
    <span></span>
    <div class="content">
      <h2>Apple would have accepted Flash player on iPhone if it worked</h2>
      <p>An ex-Apple employee reveals why Adobe Flash player has never been on iPhone</p>
      <a target='_blank' href="#">Read More</a>
    </div>
  </div>
  <div class="box">
    <span></span>
    <div class="content">
      <h2>This app turns your iPhone into an eye-tracking device!</h2>
      <p>The presentation of an application that tracks yours eyes with your iPhone</p>
      <a target='_blank' href="#">Read More</a>
    </div>
  </div>
  <div class="box">
    <span></span>
    <div class="content">
      <h2>iOS development is becoming more and more accessible.</h2>
      <p>In this article I explain the new ways and supports to develop iOS apps</p>
      <a target='_blank' href="#">Read More</a>
    </div>
  </div>
    </div>
    </div>
    
  )
}

export default News;