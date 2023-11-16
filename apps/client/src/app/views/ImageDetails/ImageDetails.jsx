import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavBarFixed from '../../components/NavBarFixed/NavBarFixed';
import { ImageContext } from '../../contexts/ImageContext';
import { useImage } from '../../states/store.state';
import { Toast, downloadImage, getStrType } from '../../utils/metods.util';
import iconUser from '../../../assets/svg/person.svg'
import Loading from '../../components/Loading';
import Page404 from '../Page404/Page404';

const ImageDetails = () => {

    const params = useParams();

    const { loadImageId } = useContext(ImageContext);
    const { image, isLoadingImage } = useImage();

    const navigate = useNavigate();

    useEffect(
        ()=>{
            loadImageId(params.id)
        },[]
    )

    const download = async (url) => {
        const resp = await downloadImage(url)
        if(!resp){
            Toast({icon: 'error', title: 'Error...'})
        }
    };

    const CardTags = ()=>(
        <div className="card m-2">
            <div className="card-header">
                Tags
            </div>
            <div className="list-group list-group-flush">
                <div className="list-group-item">
                    {
                        image.tags.split(',').map(
                            (item, index)=>(
                                <button 
                                    onClick={()=>{
                                        const type = getStrType(image.type)
                                        navigate(`/search/${type}/${item.trim()}`)
                                    }}
                                    key={index} className="btn btn-secondary me-2">
                                    {item}
                                </button>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )

    const CardInteractions = ()=>(
        <div className="card m-2">
            <div className="card-header">
                Interactions
            </div>
            <div className="d-flex p-3 gap-4">
                <div className=''><i className="bi bi-heart-fill me-2"></i>{image.likes}</div>
                <div className=''><i className="bi bi-eye-fill me-2"></i>{image.views}</div>
                <div className=''><i className="bi bi-download me-2"></i>{image.downloads}</div>
            </div>
        </div>
    )

    const CardDownloads = ()=>(
        <div className="card m-2">
            <div className="card-header">
                Downloads
            </div>
            <div className="list-group list-group-flush">
                <div className="list-group-item">
                    <button onClick={()=>download(image.previewURL)} className="btn btn-success me-2">
                        Small
                    </button>
                    <button onClick={()=>download(image.webformatURL)} className="btn btn-success me-2">
                        Medium
                    </button>
                    <button onClick={()=>download(image.largeImageURL)} className="btn btn-success me-2">
                        Big
                    </button>
                </div>
            </div>
        </div>
    )

    const ImageDetail = ()=>(
        <div>
            <img className="w-100 img-fluid" src={image.largeImageURL} alt="" />
            <a className='p-4  td-none d-flex justify-content-start align-item-center' target="_blank" href={`https://pixabay.com/es/users/${image.user}-${image.user_id}`}>
                <img 
                    className='rounded-circle me-2' 
                    width={50} 
                    src={image.userImageURL} 
                    onError={(e)=>e.target.src=iconUser}
                    alt="" 
                />
                <span className='fw-b fs-3 text-dark'>{image.user}</span>
            </a>
            <CardTags />
            <CardInteractions />
            <CardDownloads />
        </div>
    )

    return <section style={{paddingTop: '70px', paddingBottom: '10px'}}>
        <NavBarFixed/>
        {
            isLoadingImage ? <Loading /> : image==null ? <Page404 text='Image not found'/> : <ImageDetail />
        }
    </section>
}

export default ImageDetails