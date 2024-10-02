import React from 'react';
import '../../App.css';
import feature from '../../ImageVideo/feature.jpg';

function Features() {
  return (
    <div className='features'>
      <h1>Unlock a World of Engaging Learning with <span>Wizer</span></h1>
      <img src={feature}/>
      <p>With Wizer, education goes beyond the traditional worksheet — it's interactive, 
        immersive, and personalized. Whether you’re a teacher looking to spark curiosity 
        or a student seeking fun, engaging content, Wizer’s dynamic tools bring every lesson
         into focus. Get ready to transform your training into a hub of active learning</p>

        <h2>Where every worksheet becomes a journey of discovery!</h2>
    </div>
  )
}

export default Features
