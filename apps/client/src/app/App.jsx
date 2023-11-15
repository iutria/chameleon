import React from 'react'
import RoutesApp from './routes/RoutesApp'
import { ImageContext, ImageContextProvider } from './contexts/ImageContext'

const App = () => (
    <ImageContextProvider>
        <RoutesApp />
    </ImageContextProvider>
)

export default App