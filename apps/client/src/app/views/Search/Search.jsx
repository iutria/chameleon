import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ImageList from '../../components/ImageList/ImageList';
import { ImageContext } from '../../contexts/ImageContext';
import NavBarFixed from '../../components/NavBarFixed/NavBarFixed';

const Search = () => {

  const params = useParams();
  const { loadSearch } = useContext(ImageContext)

  const loadImagesSearch = async()=>{
    const type = params.type;
    const search = params.q=='all'?'':params.q;
    await loadSearch(type, search)
  }

  useEffect(
    ()=>{
      loadImagesSearch()
    },[params]
  )

  return (
    <section>
      <NavBarFixed type={params.type} search={params.q} />
      <div style={{height: '60px'}}></div>
      <ImageList/>
    </section>
  )
}

export default Search