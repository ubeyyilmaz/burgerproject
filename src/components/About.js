import React from 'react'
import '../styles/About.css'
import Steak from '../assets/steak.jpeg'

const About = () => {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: ` url(${Steak})` }}>
      </div>
      <div className='aboutBottom'>
        <h1>Hakkımızda</h1>
        <p> All in all, the Default texture pack is an excellent starting point for creating custom packs. Many players enjoy creating their own textures for Minecraft, either to personalize their game
          or to share with others on our
          website. The default resource pack provides a solid foundation for these efforts, with clear,
          easy-to-understand textures that can be modified or replaced as desired. This allows players to experiment
          with different textures and create unique, customized graphics for Minecraft that reflect their own preferences.

          All in all, the Default texture pack is an excellent starting point for creating custom packs. Many players enjoy creating their own textures for Minecraft,
          either to personalize their game or to share with others on our website. The default resource pack provides a solid foundation for these efforts, with clear,
          easy-to-understand textures that can be modified or replaced as desired. This allows players to experiment with different textures and create unique, customized
          graphics for Minecraft that reflect their own preferences.

          All in all, the Default texture pack is an excellent starting point for creating custom packs. Many players enjoy creating their own textures for Minecraft, either
          ,to personalize their game or to share with others on our website. The default resource pack provides a solid foundation for these efforts, with clear, easy-to-understand
          textures that can be modified or replaced as desired. This allows players to experiment with different textures and create unique, customized graphics for Minecraft that reflect their own preferences.

        </p>
      </div>


    </div>
  )
}

export default About
