import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// Import Swiper React components
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";


const data = [
  {
    avatar: AVTR1,
    name: 'John Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptates eaque repudiandae minima ipsum alias maxime suscipit esse obcaecati molestiae placeat dicta ducimus molestias consectetur, porro quasi aut repellendus iste.'
  },
  {
    avatar: AVTR2,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptates eaque repudiandae minima ipsum alias maxime suscipit esse obcaecati molestiae placeat dicta ducimus molestias consectetur, porro quasi aut repellendus iste.'
  },
  {
    avatar: AVTR3,
    name: 'Paul Martin',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptates eaque repudiandae minima ipsum alias maxime suscipit esse obcaecati molestiae placeat dicta ducimus molestias consectetur, porro quasi aut repellendus iste.'
  },
  {
    avatar: AVTR4,
    name: 'Eva Mcinton',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptates eaque repudiandae minima ipsum alias maxime suscipit esse obcaecati molestiae placeat dicta ducimus molestias consectetur, porro quasi aut repellendus iste.'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      module={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable: true}}>

      
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="Avatar One" />
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials