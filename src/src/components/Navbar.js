import React, { Component,  useState } from "react";

export default class Navbar extends Component {
    state = { isActive: false };
    handleToggle = () => {
      this.setState({ isActive: !this.state.isActive });  };
    render() 
  {
    const isActive = this.state.isActive;
    return (
        
      <nav>
        <div class="px-1 md:px-8 mx-auto">
          <div class="flex justify-between">
            <div class="flex space-x-4">
              <div>
                <a href="#" class="flex items-center py-4 px-3">
                  <svg
                    class="h-6 w-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    color="#00FF00"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                  <span class="text-color-light hover-green font-mono">Don Sanchez</span>
                </a>
              </div>

            
            </div>
            <div class="hidden md:flex flex items-center space-x-1 font-mono">
              <a href="" class="py-5 px-3  green-color"> 01. <span class="text-color-light hover-green">About</span></a>
              <a href="" class="py-5 px-3  green-color"> 02. <span class="text-color-light hover-green">Experience</span></a>
              <a href="" class="py-5 px-3  green-color"> 03. <span class="text-color-light hover-green">Work</span></a>
              <a href="" class="py-5 px-3  green-color"> 04. <span class="text-color-light hover-green">Contact</span></a>
              <a href="" class="py-1 px-1 text-color-light outline outline-offset-2 outline-1 outline-my-green text-color-light rounded ">Resume</a>
            </div>

            <div class="md:hidden flex items-center text-color-light hover-green">
                <button class="mobile-menu-button "  onClick={this.handleToggle}>
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
</svg>
</button>
            </div>
          </div>


        </div>
        <div class="md:hidden">
        <div class="hidden mobile-menu md:hidden" className={isActive ? null : "hidden mobile-menu md:hidden"}>
            <div class="flex flex-col justify-center">
            
            <div class="flex flex-col py-2 px-2  font-mono">
            <span class="text-color-light py-2 px-2 mx-auto">01.</span>
        <a href="" class="py-2 px-2 mx-auto  green-color">About </a>
        </div>

        <div class="flex flex-col  py-2 px-2 font-mono">
            <span class="text-color-light py-2 px-2 mx-auto">02.</span>
        <a href="" class="py-2 px-2 mx-auto  green-color">Experience </a>
        </div>

        <div class="flex flex-col  py-2 px-2 font-mono">
            <span class="text-color-light py-2 px-2 mx-auto">03.</span>
        <a href="" class="py-2 px-2 mx-auto  green-color">Work </a>
        </div>

        <div class="flex flex-col  py-2 px-2 font-mono">
            <span class="text-color-light py-2 px-2 mx-auto">04.</span>
        <a href="" class="py-2 px-2 mx-auto  green-color">Contact </a>
        </div>

        <div class="flex flex-col  py-2 px-2 font-mono ">
            <span class="text-color-light py-2 px-2 mx-auto">05.</span>
        <a href="" class="py-2 px-2 mx-auto text-color-light outline outline-offset-2 outline-1 outline-my-green text-color-light rounded ">Resume</a>
        </div>

        </div>
        </div>
        </div>
      </nav>
  
        
    );
  }
}
