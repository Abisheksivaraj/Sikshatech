import React from 'react'
import Lmsmobileapp from './Lmsmobileapp'
import Icons from './Icons'
import Software from './Software'
import Carouselc1 from './Carouselc1'
import Broucher from './Broucher'
import Demo from './Demo'
import { useEffect } from 'react'
const SolutionPage = () => {
  useEffect (() => {
    window.scrollTo(0,0);
    },[]);
  return (
    <div>
        <Lmsmobileapp/>
        <Icons/>
        <Software/>
        <Carouselc1/>
        <Carouselc1/>
        <Broucher/>
        <Carouselc1/>
        <Demo/>
        


    </div>
  )
}

export default SolutionPage