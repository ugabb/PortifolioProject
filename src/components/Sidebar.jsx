import React from 'react'
import Avatar from '../img/me.jpg'
import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'
import SocialNetworks from './SocialNetworks'

const Sidebar = () => {
  return (
    <aside id='sidebar'>
        <img src={Avatar} alt="Gabriel Barros" />
        <p className='title'>Desenvolvedor</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="" className='btn'>Dowload Resume</a>
    </aside>  
  )
}

export default Sidebar