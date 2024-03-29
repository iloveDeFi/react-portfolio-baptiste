import React from 'react'
import './Experiences.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function Experiences() {
  return (
    <section id='experiences'>
      <h5>The Skills I Have</h5>
      <h2>My Profile</h2>
      <div className="container experience__container">

        {/* FRONTEND POUR COMMENTER C'EST SHIFT + ALT + A*/}

        <div className="experience__frontend">
          <h3>FRONTEND</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4>Javascript</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
        </div>




        {/* BACKEND POUR COMMENTER C'EST SHIFT + ALT + A*/}

        <div className="experience__backend">
        <h3>BACKEND</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4>Node JS</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4>PHP</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons' />
            <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
        </div>

        </div>
      
      </section>
  )
}

export default Experiences