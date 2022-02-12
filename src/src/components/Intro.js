import React, { Component } from 'react'

export default class Intro extends Component {
  render() {
    return (
      <div class="px-2 md:px-80 mx-auto my-20 space-y-6">
          <h5 class="green-color font-normal">Hello, my name is</h5>
          <h1 class="color-grey  text-4xl  font-bold md:text-7xl ">Donovan Saunches.</h1>
          <h1 class="color-grey-dark text-3xl font-semibold md:text-5xl">I build things for the web.</h1>
          <p class="color-grey-text text-lg font-normal max-w-md">I'm a software developer that primarily focuses on web & mobile application.
          I'm currently focused on building enterprise level applications with <a href="https://www.utechsapna.com/" target="_blank" class="green-color">UTech Sapna  </a>.
          </p>
      </div>
    )
  }
}
