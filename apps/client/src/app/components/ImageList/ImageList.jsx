import React from 'react';
import './imagelist.css';
import CardImage from '../CardImage/CardImage';
import { useListImage } from '../../states/store.state';

const ImageList = () => {

    const { list } = useListImage();
    const { isLoading } = useListImage();

    const List = ()=>{
        return <>
        {
            list.length==0?
            <>
                <h5 className='fw-b'>
                    We have not found any results
                </h5>
            </>:
            list.map(
                (item, index)=>(<CardImage key={index} image={item}/>)
            )
        }
        </>
    }

    return <div className='card-container'>
        {
            isLoading ? 
            <div className="card placeholder-glow" aria-hidden="true">
                <span className="placeholder h-100 d-flex p-2 justify-content-between align-items-end">
                    <div className="rounded-circle bg-secondary" style={{width: '50px', height:'50px'}}></div>
                    <div className="bg-secondary" style={{width: '50px', height:'20px'}}></div>
                </span>
            </div>
            :
            <List />
        }
    </div>
}

export default ImageList