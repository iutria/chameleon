import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import './css/home.css'
import NavBar from '../../components/NavBar/NavBar';
import FormSearch from '../../components/FormSearchBanner/FormSearch';
import ImageList from '../../components/ImageList/ImageList';
import { ImageContext } from '../../contexts/ImageContext';
import { useForm } from '../../states/store.state';

const Home = () => {

  const location = useLocation()

  const { loadHome } = useContext(ImageContext)
  const { setFormData } = useForm()

  useEffect(
    ()=>{
      loadHome(location.pathname.split('/').pop())
      setFormData({type: '', search: ''})
    },[location.pathname]
  )
  
  return (
    <section className='Home'>
      <div className="banner p-4 d-flex center" background={location.pathname}>
        <h2 className='text-center text-light mb-4'>Amazing Free Images to Download</h2>
        <div>
          <FormSearch/>
        </div>
      </div>
      <NavBar />
      <ImageList/>
    </section>
  )
}

export default Home