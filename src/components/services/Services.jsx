import React from 'react'
import './Services.css'
import {AiOutlineCheck} from 'react-icons/ai'
function services() {
  return (
    <section id='services'>
      <h5>What I studied</h5>
      <h2>My Experience</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>FRONTEND</h3>
          </div>

          <ul className="service__list">
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}


        <article className="service__back">
          <div className="service__head">
            <h3>BACKEND</h3>
          </div>

          <ul className="service__list">
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF FRONTEND */}

               <article className="service">
          <div className="service__head">
            <h3>UI/UX</h3>
          </div>

          <ul className="service__list">
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
            <AiOutlineCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF BACKEND*/}

      </div>

    </section>
  )
}

export default services