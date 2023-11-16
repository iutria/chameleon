import React from 'react';
import './imagelist.css';
import CardImage from '../CardImage/CardImage';
import { useListImage } from '../../states/store.state';
import CardsLoading from '../CardsLoading';

const ImageList = () => {

    const { list } = useListImage();
    const { isLoading } = useListImage();

    const NotData = ()=>(
        <h5 className='fw-b'>
            We have not found any results
        </h5>
    )

    const List = ()=>{
        return <>
        {
            list.length==0?
            <NotData />:
            list.map(
                (item, index)=>(<CardImage key={index} image={item}/>)
            )
        }
        </>
    }

    return <div className='card-container'>
        {
            isLoading ? <CardsLoading /> : <List />
        }
    </div>
}

export default ImageList