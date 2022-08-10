import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">
        <div className="about__me"> 
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__card">
              <article className="about__card">
                <FaAward className="about__icon"/>
                <h5>Experience</h5>
                <small>1+ Years Working</small>
              </article>

      
              <article className="about__card">
                <FiUsers className="about__icon"/>
                <h5>Clients</h5>
                <small>200+ Worldwide</small>
              </article>

              <article className="about__card">
                <VscFolderLibrary className="about__icon"/>
                <h5>Projects</h5>
                <small>80+ Completed</small>
              </article>
          </div>

          <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, impedit excepturi tenetur itaque sed fuga reiciendis, non corporis exercitationem tempore illum voluptate! Impedit officia corporis asperiores dolorem! Asperiores, eveniet tenetur!
          Tempore eaque, atque voluptatum qui est omnis deserunt, sapiente mollitia earum aliquam placeat porro. Enim eveniet inventore nulla esse tempora. Repellendus expedita eaque, sapiente rem odit vitae quos laboriosam officiis!
          </p>

      
          <a href="#contact" className='btn btn-primary'>Let's talk</a>

        </div>
      </div>
      </section>
  )
}

export default About