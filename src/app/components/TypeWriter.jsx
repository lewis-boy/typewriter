"use client"
import React, { useRef } from "react"
import "./typewriter.css"

const TypeWriter = () => {
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  const phrases = ["code", "make beats", "hug puppies"]
  const typewriterRef = useRef(null)
  let sleepTime = 100
  let phraseIndex = 0

  const writeLoop = async () => {
    while (true) {
      let word = phrases[phraseIndex]
      console.log(word)
      sleep(10000)
    }
  }

  writeLoop()

  return (
    <div className="grid h-screen place-content-center bg-neutral-900 px-4 py-12">
      <div className="w-fit mx-auto text-white">
        Hey, Im Lewis! <br />I like to{" "}
        <span
          id="typewriter"
          ref={typewriterRef}
        ></span>
        <span id="cursor">|</span>
      </div>
    </div>
  )
}

export default TypeWriter
