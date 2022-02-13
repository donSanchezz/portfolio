import React, { Component } from 'react'

export default class Intro extends Component {
  render() {
    return (
      <div class="flex justify-start my-20 ">
        <div class="flex flex-col space-y-6">
          <h5 class="green-color font-normal">Hello, my name is</h5>
          <h1 class="color-grey  text-4xl  font-bold md:text-7xl ">Donovan Saunches.</h1>
          <h1 class="color-grey-dark text-4xl font-semibold md:text-7xl">I build things for the web.</h1>
          <p class="color-grey-text text-lg font-normal max-w-lg">I'm a software developer that primarily focuses on web & mobile application.
          I'm currently focused on building enterprise level applications with <a href="https://www.utechsapna.com/" target="_blank" class="green-color hover-underline-animation">UTech Sapna  </a>.
          </p>
      </div>
      </div>
    )
  }
}
