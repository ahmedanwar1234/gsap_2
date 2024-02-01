import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Hero from '../Hero'
import {gsap}from 'gsap'
import { ScrollTrigger } from 'gsap-trial/all'
const Main = () => {
    const [loader,setLoader]=useState(true)
  useEffect(()=>{
setTimeout(()=>{
setLoader(false)
},500)
  },[])
useEffect(()=>{
gsap.registerPlugin(ScrollTrigger)
},[])

    return loader?(
<div className='loader'/>):
(
    <div>
<Hero/>

    </div>
  )
}

export default Main