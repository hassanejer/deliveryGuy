import React, { Fragment } from 'react'
import Hero from '../Includes/hero/Hero'
import Trusted from '../Includes/hero/Trusted'
import Popular from '../Includes/hero/Popular'
import SellingText from '../Includes/hero/SellingText'
import Testimonial from '../Includes/hero/Testimonial'


function Content() {
  return (
    <Fragment>
        <Hero />
        <Trusted />
        <Popular />
        <SellingText />
        <Testimonial />
      
    </Fragment>
  )
}

export default Content
