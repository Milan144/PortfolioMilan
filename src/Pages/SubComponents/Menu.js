import React from 'react'
import './Menu.css';

export default function Menu() {
  return (
    <div class="main">
		<a class="logo" href='/'>M.H</a>
  	<input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
  	<label for="menu-icon"></label>
  	<nav class="nav"> 		
  		<ul class="pt-5">
  			<li><a href="/about">ABOUT</a></li>
  			<li><a href="/work">WORK</a></li>
  			<li><a href="/news">NEWS</a></li>
  			<li><a href="#">CONTACT</a></li>
  		</ul>
  	</nav>
  </div>
   
  )
}
