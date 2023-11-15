import React from 'react'
import { useParams } from 'react-router-dom'
import NavBarFixed from '../../components/NavBarFixed/NavBarFixed';

const Image = () => {

    const params = useParams();

    return <section>
        <NavBarFixed type='' search='' />
    </section>
}

export default Image