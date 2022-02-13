import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div class="flex justify-center mt-72 space-y-6">
        <div class="flex flex-col">
          <h1 class="green-color text-2xl font-bold">
            01. <span class="color-grey">ABOUT</span>
          </h1>
          <div class="flex flex-col md:flex-row md:space-x-5">
            <div class="color-grey-text max-w-md space-y-8 text-lg">
              <p>
                Hello, my name is Donovan Saunches, Im a software developer who
                enjoys bringing ideas to fruition through a software solution.
                I've been writing code for four years, one year professionally.
                I've had the opportunity to get hands of experience via <a href="https://www.utechsapna.com/" target="_blank" class="green-color hover-underline-animation">UTech Sapna  </a>, 
                releasing <a href="https://play.google.com/store/apps/details?id=com.utech.sapna.expkgn&hl=en&gl=US" target="_blank" class="green-color hover-underline-animation">Experience Kingston </a>, a mobile application that's
                currently on the Google Play Store.
              </p>

              <p>
                My current objective is to continue developing software
                solutions that have a meaningful impact on the daily lives of
                people and to further advance my skills as a person & a
                developer.
              </p>

              <p>A few technologies in my arsenal that I've worked with recently:</p>
              <div class="grid gap-4 grid-cols-2 grid-rows-3">
                <div class="flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    color="#00FF00"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p class="text-sm">C#</p>
                </div>

                <div class="flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    color="#00FF00"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p class="text-sm">.NET</p>
                </div>

                <div class="flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    color="#00FF00"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p class="text-sm">React</p>
                </div>

                <div class="flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    color="#00FF00"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p class="text-sm">Xamarin</p>
                </div>

                <div class="flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    color="#00FF00"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p class="text-sm">Blazor</p>
                </div>

                <div class="flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    color="#00FF00"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p class="text-sm">JavaScript</p>
                </div>
              </div>
            </div>

            <div class="mt-5">
              <div class="box-anim">
                <img
                  src="imgs/donovan.jpg"
                  class="md:w-16 lg:w-96 rounded"
                  alt="donovan"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
