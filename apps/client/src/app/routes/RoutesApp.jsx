import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from '../views/Home/Home'
import ImageList from '../components/ImageList/ImageList'
import Search from '../views/Search/Search'
import Page404 from '../views/Page404/Page404'
import Image from '../views/Image/Image'

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home /> } >             
                    <Route path='/photo' element={ <Home /> } />                
                    <Route path='/illustration' element={ <Home /> } />                
                    <Route path='/vector' element={ <Home /> } />                
                </Route>
                <Route path='/search/:type/:q' element={ <Search />} />
                <Route path='/image/:id' element={ <Image/>}/>
                <Route path='*' element={ <Page404/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp