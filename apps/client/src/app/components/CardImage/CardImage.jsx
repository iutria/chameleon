import React from 'react';
import './cardimage.css'
import { useNavigate } from 'react-router-dom';
import iconImage from '../../../assets/svg/icon-image.svg'
import iconUser from '../../../assets/svg/person.svg'
import { getStrType } from '../../utils/metods.util';

const CardImage = ({image}) => {
    const navigate = useNavigate()
    const getclass = ()=> {
        const random = Math.floor(Math.random() * (10)) + 1;
        switch (random) {
            case 1: return 'tall';
            case 2: return 'wide';
            default: return '';
        }
    }
    return (
        <div 
            className={`cursor-pointer item-card ${getclass()}`}
        >
            <div className="tags-card">
                {
                    image.tags.split(',').map(
                        (item, index)=>(
                            <span 
                                key={index} 
                                onClick={()=>{
                                    const type = getStrType(image.type)
                                    navigate(`/search/${type}/${item.trim()}`)
                                }}
                                className='tag'
                            >
                                {item}
                            </span>
                        )
                    )
                }
            </div>
            <img 
                onClick={()=>navigate(`/image/${image.id}`)}
                className='image-card'
                onError={(e)=>(e.target.src=iconImage)}
                src={image.webformatURL} 
                alt={image.tags}
                />
            <div className='info-card'>
                <a target="_blank" href={`https://pixabay.com/es/users/${image.user}-${image.user_id}`}>
                    <img 
                        onError={(e)=>(e.target.src=iconUser)}
                        className='image-user-card' src={image.userImageURL}  alt="" 
                    />
                </a>
                <span className='fw-b text-light'>
                    <i className="bi bi-heart-fill text-danger me-2"></i>
                    {image.likes}
                </span>
            </div>
        </div>
    )
}

export default CardImage    