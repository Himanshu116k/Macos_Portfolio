import React from 'react'
import Navbar from '#components/Navbar.jsx'
import Welcome from './components/Welcome'
import Dock from './components/Dock'
import { Draggable } from 'gsap/Draggable'
import gsap from 'gsap'
import Terminal from "./windows/Terminal.jsx"
import SafariWinodw from './windows/Safari.jsx'
import ResumeWindow from './windows/Resume.jsx'
import Finder from './windows/Finder.jsx'
import Text from './windows/Text.jsx'
import Image from './windows/Image.jsx'
import Contact from './windows/Contact.jsx'
gsap.registerPlugin(Draggable)

const App = () => {
  return (
   <main>
    <Navbar/>
    <Welcome/>
    <Dock/>

    <Terminal/>
    <SafariWinodw/>
    <ResumeWindow/>
    <Finder/>
    <Text/>
    <Image/>
    <Contact/>
   </main>
  )
}

export default App