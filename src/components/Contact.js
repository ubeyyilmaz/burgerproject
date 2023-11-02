import React from 'react'
import Banner from '../assets/acılıs.jpg'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='leftSide' style={{ backgroundImage: ` url(${Banner}) ` }}>

      </div>
      <div className='rightSide'>
        <h1>Bizimle İletişime Geçin </h1>
        <form>
          <label>Ad Soyad</label>
          <input type='text' name='name' placeholder='Lütfen adınızı ve soyadınızı giriniz...' />
          <label>Email</label>
          <input type='email' name='email' placeholder='Lütfen emailgiriniz...' />
          <label>Mesajınız</label>
          <textarea rows="5" name='message' placeholder='Lütfen mesajınızı giriniz...' ></textarea>
        </form>

      </div>
    </div>
  )
}

export default Contact
