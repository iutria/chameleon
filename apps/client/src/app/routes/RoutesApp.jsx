import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from '../views/Home/Home'
import Search from '../views/Search/Search'
import Page404 from '../views/Page404/Page404'
import ImageDetails from '../views/ImageDetails/ImageDetails'


const RoutesApp = () => {
    const router = createHashRouter([
        { path: '/', element: <Home /> },
        { path: '/photo', element: <Home /> },
        { path: '/illustration', element: <Home /> },
        { path: '/vector', element: <Home /> },
        { path: '/search/:type/:q', element: <Search /> },
        { path: '/image/:id', element: <ImageDetails/> },
        { path: '*', element: <Page404 /> },
    ])
    return <RouterProvider router={router} />
}

export default RoutesApp