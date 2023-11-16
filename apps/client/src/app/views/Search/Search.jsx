import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ImageList from '../../components/ImageList/ImageList';
import { ImageContext } from '../../contexts/ImageContext';
import NavBarFixed from '../../components/NavBarFixed/NavBarFixed';
import { useForm } from '../../states/store.state';

const Search = () => {

  const params = useParams();
  const { loadSearch } = useContext(ImageContext)
  const { setFormData } = useForm()

  const loadImagesSearch = async()=>{
    const type = params.type;
    const search = params.q=='all' ? '' : params.q;
    setFormData({type, search})
    await loadSearch(type, search)
  }

  useEffect(
    ()=>{
      loadImagesSearch()
    },[params]
  )

  return (
    <section>
      <NavBarFixed />
      <div style={{height: '60px'}}></div>
      <ImageList/>
    </section>
  )
}

export default Search