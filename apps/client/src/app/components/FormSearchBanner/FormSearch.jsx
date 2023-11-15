import {Formik, useFormik} from 'formik';
import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const FormSearch= ({values}) => {
    
    const navigate = useNavigate();

    const handleSubmmit = (values)=>{
        const type = values.type;
        const q = values.search == '' ? 'all' : values.search;
        navigate(`/search/${type}/${q}`)
    }

    const formik = useFormik({
        initialValues: {type: 'photo', search: ''},
        onSubmit: handleSubmmit
    })

    useEffect(
        ()=>{
            if(values){
                formik.setValues(values)
            }
        },[]
    )

    return (
        <form onSubmit={formik.handleSubmit} className='w-100 d-flex center'>
        <div className="input-group">
            <select 
                name='type'
                onChange={formik.handleChange}
                value={formik.values.type} 
                className="input-group-text"
            >
                <option value='photo'>Photos</option>
                <option value="illustration">Illustrators</option>
                <option value="vector">Vectors</option>
            </select>
            <input 
                name='search'
                value={formik.values.search}
                onChange={formik.handleChange}
                type="text" 
                className="form-control" 
                placeholder="Search in all images."
            />
            <button type='submit' className="input-group-text" id="basic-addon1">
                <i className="bi bi-search"></i>
            </button>
        </div>
    </form>
    )
}

export default FormSearch