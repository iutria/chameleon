import React from 'react'
import img404 from '../../../assets/images/cat_404.png'

const Page404 = () => {
  return (
    <section className='d-flex center w-100 p-4 flex-column' style={{height: '100vh'}}>
      <img src={img404} className='img-fluid' alt="image_error" />
      <h2 className='mt-4 fs-1 fw-b'>Error 404</h2>
    </section>
  )
}

export default Page404